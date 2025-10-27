"use client";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function CompanyPage() {
  const [color, setColor] = useState("#00f5d4");

  const onLoad = (spline) => {
    // Example: find object by name and change its material color dynamically
    const obj = spline.findObjectByName("Cube");
    if (obj) obj.material.color = color;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400">
      <h1 className="text-4xl font-bold mb-4 neon-text">Company 3D View</h1>
      <div className="w-[800px] h-[600px] border-2 border-cyan-500 rounded-xl overflow-hidden shadow-[0_0_20px_#00f5d4]">
        <Spline
          scene="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode"
          onLoad={onLoad}
        />
      </div>

      <div className="mt-6 flex gap-4">
        <label>Change Object Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="rounded-full border border-cyan-500 bg-black"
        />
      </div>
    </div>
  );
}
