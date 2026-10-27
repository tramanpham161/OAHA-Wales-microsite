import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function apiMiddlewarePlugin() {
  return {
    name: 'api-middleware',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/translations.txt' || req.url === '/translations.ts') {
          const filePath = path.join(__dirname, 'src', 'lib', 'translations.ts');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(fs.readFileSync(filePath, 'utf-8'));
            return;
          }
        }

        if (req.url === '/api/health' || req.url === '/health') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'ok',
            hasApiKey: !!process.env.GEMINI_API_KEY,
            hasResendApiKey: !!process.env.RESEND_API_KEY,
            time: new Date().toISOString()
          }));
          return;
        }

        if (req.url === '/api/send-email' || req.url === '/send-email') {
          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', (chunk: any) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              try {
                const body = JSON.parse(bodyStr || '{}');
                const { type, data } = body;
                if (!type || !data) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: "Missing 'type' or 'data' in request body." }));
                  return;
                }

                if (!process.env.RESEND_API_KEY) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: true,
                    isMockMode: true,
                    message: "RESEND_API_KEY environment variable is missing in Settings. Running in simulation mode."
                  }));
                  return;
                }

                const { Resend } = await import('resend');
                const resend = new Resend(process.env.RESEND_API_KEY);
                const toEmail = "info.oaha.uk@gmail.com";
                const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

                let subject = "";
                let htmlContent = "";

                if (type === "inquiry") {
                  const { name, email, phone, organisation, role, orgType, category, option, message } = data;
                  subject = `[OAHA Wales Inquiry] - ${name} (${organisation})`;
                  htmlContent = `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                      <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: 24px; font-weight: bold; color: #2E536B;">OAHA UK</div>
                        <div style="font-size: 12px; color: #51615a; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;">Wales Social Mobility Initiative</div>
                      </div>
                      <h2 style="color: #2E536B; border-bottom: 2px solid #3AB03A; padding-bottom: 12px; margin-top: 0; font-size: 18px; font-weight: 600;">New Collaboration Inquiry</h2>
                      <p><strong>Category:</strong> ${category}</p>
                      <p><strong>Option:</strong> ${option}</p>
                      <p><strong>Name:</strong> ${name}</p>
                      <p><strong>Organisation:</strong> ${organisation} (${orgType})</p>
                      <p><strong>Role:</strong> ${role}</p>
                      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                      <p><strong>Phone:</strong> ${phone}</p>
                      <div style="margin-top: 16px; padding: 12px; background: #faf9f6; border-left: 4px solid #FF9900;">
                        <strong>Message:</strong><br/>
                        ${message || 'No message provided.'}
                      </div>
                    </div>`;
                } else if (type === "map") {
                  const { contributionType, name, contact, message } = data;
                  subject = `[OAHA Wales Ecosystem Map] - ${contributionType} by ${name}`;
                  htmlContent = `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                      <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: 24px; font-weight: bold; color: #2E536B;">OAHA UK</div>
                        <div style="font-size: 12px; color: #51615a; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;">Wales Social Mobility Initiative</div>
                      </div>
                      <h2 style="color: #2E536B; border-bottom: 2px solid #FF9900; padding-bottom: 12px; margin-top: 0; font-size: 18px; font-weight: 600;">Ecosystem Map Contribution</h2>
                      <p><strong>Contribution Type:</strong> ${contributionType}</p>
                      <p><strong>Contributor Name:</strong> ${name}</p>
                      <p><strong>Contact Info:</strong> ${contact}</p>
                      <div style="margin-top: 16px; padding: 12px; background: #faf9f6; border-left: 4px solid #3AB03A;">
                        <strong>Details:</strong><br/>
                        ${message}
                      </div>
                    </div>`;
                }

                const emailResponse = await resend.emails.send({
                  from: fromEmail,
                  to: toEmail,
                  subject,
                  html: htmlContent
                });

                if (emailResponse.error) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: emailResponse.error.message }));
                  return;
                }

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, messageId: emailResponse.data?.id }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Error processing email' }));
              }
            });
            return;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiMiddlewarePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
