import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
    config: {
      damping: 10,
      stiffness: 100,
      mass: 0.5,
    },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 120,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
          margin: 0,
          textShadow: "0 4px 24px rgba(0,0,0,0.5)",
        }}
      >
        Hello World
      </h1>
    </div>
  );
};
