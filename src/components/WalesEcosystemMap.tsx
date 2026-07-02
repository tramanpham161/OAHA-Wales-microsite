import React, { useState, useEffect } from "react";

interface MapPoint {
  x: number;
  y: number;
  color: string;
}

export default function WalesEcosystemMap() {
  // 7 constant initial hubs representing the main nodes
  const initialHubs: MapPoint[] = [
    { x: 146, y: 216, color: "#2E536B" }, // Cardiff (Metro Core / Primary hub for connection line rendering)
    { x: 138, y: 52, color: "#2E536B" },  // Wrexham (North East)
    { x: 62, y: 44, color: "#2E536B" },   // Bangor (North West)
    { x: 76, y: 128, color: "#2E536B" },  // Aberystwyth (Mid)
    { x: 140, y: 185, color: "#2E536B" }, // Merthyr Tydfil (Valleys)
    { x: 112, y: 214, color: "#2E536B" }, // Swansea (South West)
    { x: 162, y: 206, color: "#2E536B" }  // Newport (East Gateway)
  ];

  // Additional dynamic points that pop up sequentially over time to showcase an expanding ecosystem
  const dynamicPoints: MapPoint[] = [
    { x: 96, y: 212, color: "#2BB7BA" },  // Llanelli
    { x: 130, y: 215, color: "#FF9900" }, // Bridgend
    { x: 106, y: 206, color: "#3AB03A" }, // Neath
    { x: 144, y: 200, color: "#2BB7BA" }, // Pontypridd
    { x: 148, y: 194, color: "#FF9900" }, // Caerphilly
    { x: 158, y: 198, color: "#3AB03A" }, // Cwmbran
    { x: 160, y: 178, color: "#2BB7BA" }, // Monmouth
    { x: 148, y: 180, color: "#FF9900" }, // Ebbw Vale
    { x: 122, y: 160, color: "#3AB03A" }, // Brecon
    { x: 110, y: 115, color: "#2BB7BA" }, // Newtown
    { x: 132, y: 105, color: "#FF9900" }, // Welshpool
    { x: 68, y: 204, color: "#3AB03A" },  // Carmarthen
    { x: 44, y: 206, color: "#2BB7BA" },  // Tenby
    { x: 30, y: 198, color: "#FF9900" },  // Haverfordwest / St Davids
    { x: 50, y: 16, color: "#3AB03A" },   // Holyhead (Anglesey)
    { x: 74, y: 32, color: "#2BB7BA" },   // Llandudno
    { x: 96, y: 28, color: "#FF9900" },   // Rhyl
    { x: 128, y: 44, color: "#3AB03A" },   // Mold
    { x: 142, y: 220, color: "#2BB7BA" }   // Barry
  ];

  const [visibleDynamicCount, setVisibleDynamicCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDynamicCount((prev) => {
        // If all points are showing, wait a bit and loop/reset back to start mapping again
        if (prev >= dynamicPoints.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white border border-[#969696]/20 p-8 rounded-3xl flex flex-col items-center justify-center relative min-h-[420px] select-none shadow-sm overflow-hidden">
      
      {/* Subtle grid pattern for clean schematic structure */}
      <div className="absolute inset-4 border border-[#969696]/10 rounded-2xl pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#969696]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#969696]/10 to-transparent pointer-events-none" />

      {/* Modern, clean SVG container */}
      <div className="relative w-full max-w-[280px] h-auto flex justify-center items-center py-4">
        <svg
          viewBox="0 0 220 280"
          className="w-full h-auto overflow-visible"
        >
          {/* Geographical Path Silhouette of Wales */}
          <path
            d="M 52,24 C 42,18 45,8 60,10 C 72,11 80,18 74,28 C 65,32 63,38 72,38 C 88,38 92,20 108,24 C 122,27 132,24 142,22 C 155,20 162,26 158,36 C 150,50 152,65 148,78 C 145,88 152,98 150,110 C 148,124 160,138 156,152 C 154,162 165,175 168,188 C 172,198 178,212 168,222 C 155,226 140,224 125,221 C 112,219 105,228 98,228 C 88,228 78,222 73,218 C 60,219 42,224 28,216 C 12,208 10,192 24,185 C 38,178 48,179 54,168 C 62,154 68,138 66,120 C 64,102 60,88 50,80 C 38,74 22,82 18,70 C 15,58 30,51 42,48 C 54,45 60,34 66,28 C 45,28 35,22 45,15 C 50,10 65,5 75,8 Z"
            fill="#2E536B"
            fillOpacity="0.04"
            stroke="#2E536B"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />

          {/* Connected Pathways Network linking primary hubs with a light grid layout */}
          <g>
            {initialHubs.map((hub, idx) => {
              if (idx > 0) {
                const prevHub = initialHubs[0]; // connected to the metropolitan core Cardiff
                return (
                  <line
                    key={`line-${idx}`}
                    x1={prevHub.x}
                    y1={prevHub.y}
                    x2={hub.x}
                    y2={hub.y}
                    stroke="#2E536B"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                    className="opacity-20"
                  />
                );
              }
              return null;
            })}
          </g>

          {/* 1. Permanent Baseline Nodes */}
          {initialHubs.map((hub, idx) => (
            <circle
              key={`initial-${idx}`}
              cx={hub.x}
              cy={hub.y}
              r="4"
              fill={hub.color}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              className="shadow-sm"
            />
          ))}

          {/* 2. Dynamic nodes popping up sequentially */}
          {dynamicPoints.map((pt, idx) => {
            const isVisible = idx < visibleDynamicCount;
            return (
              <circle
                key={`dynamic-${idx}`}
                cx={pt.x}
                cy={pt.y}
                r="3.5"
                fill={pt.color}
                stroke="#FFFFFF"
                strokeWidth="1.2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transformOrigin: `${pt.x}px ${pt.y}px`,
                  transition: "all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
                className="shadow-xs"
              />
            );
          })}
        </svg>
      </div>

    </div>
  );
}
