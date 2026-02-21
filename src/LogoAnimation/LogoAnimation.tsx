import React from "react";
import { useCurrentFrame, interpolate, Sequence } from "remotion";

const AnimatedShape: React.FC<{
  startFrame: number;
  color: string;
  size: number;
  offsetX: number;
  offsetY: number;
  shape: "circle" | "square" | "triangle";
}> = ({ startFrame, color, size, offsetX, offsetY, shape }) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  const opacity = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(localFrame, [0, 30], [0.2, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotation = interpolate(localFrame, [0, 60], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shapeStyle: React.CSSProperties =
    shape === "circle"
      ? { borderRadius: "50%" }
      : shape === "triangle"
      ? {
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          background: "transparent",
        }
      : {};

  if (shape === "triangle") {
    return (
      <div
        style={{
          position: "absolute",
          left: `calc(50% + ${offsetX}px)`,
          top: `calc(50% + ${offsetY}px)`,
          opacity,
          transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
          ...shapeStyle,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `calc(50% + ${offsetX}px)`,
        top: `calc(50% + ${offsetY}px)`,
        width: size,
        height: size,
        background: color,
        opacity,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
        ...shapeStyle,
      }}
    />
  );
};

export const LogoAnimation: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        background: "#0d0d0d",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Sequence from={0} durationInFrames={180}>
        <AnimatedShape
          startFrame={0}
          color="#e94560"
          size={160}
          offsetX={0}
          offsetY={0}
          shape="circle"
        />
      </Sequence>
      <Sequence from={30} durationInFrames={150}>
        <AnimatedShape
          startFrame={30}
          color="#0f3460"
          size={140}
          offsetX={-220}
          offsetY={-120}
          shape="square"
        />
      </Sequence>
      <Sequence from={60} durationInFrames={120}>
        <AnimatedShape
          startFrame={60}
          color="#53d8fb"
          size={120}
          offsetX={220}
          offsetY={-120}
          shape="circle"
        />
      </Sequence>
      <Sequence from={90} durationInFrames={90}>
        <AnimatedShape
          startFrame={90}
          color="#f5a623"
          size={100}
          offsetX={-220}
          offsetY={120}
          shape="square"
        />
      </Sequence>
      <Sequence from={120} durationInFrames={60}>
        <AnimatedShape
          startFrame={120}
          color="#7ed321"
          size={100}
          offsetX={220}
          offsetY={120}
          shape="triangle"
        />
      </Sequence>
    </div>
  );
};
