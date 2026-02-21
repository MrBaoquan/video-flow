import React from "react";
import { useCurrentFrame, interpolate, Sequence } from "remotion";

const SLIDE_DURATION = 90;

interface SlideProps {
  title: string;
  subtitle: string;
  background: string;
  localFrame: number;
}

const Slide: React.FC<SlideProps> = ({ title, subtitle, background, localFrame }) => {
  const opacity = interpolate(localFrame, [0, 20, SLIDE_DURATION - 20, SLIDE_DURATION], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(localFrame, [0, 20], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 96,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          margin: 0,
          textAlign: "center",
          textShadow: "0 4px 16px rgba(0,0,0,0.4)",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 48,
          fontFamily: "sans-serif",
          marginTop: 32,
          textAlign: "center",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

const SlideWrapper: React.FC<Omit<SlideProps, "localFrame">> = (props) => {
  const frame = useCurrentFrame();
  return <Slide {...props} localFrame={frame} />;
};

export const SlideShow: React.FC = () => {
  return (
    <div style={{ flex: 1, position: "relative", display: "flex" }}>
      <Sequence from={0} durationInFrames={SLIDE_DURATION}>
        <SlideWrapper
          title="Welcome"
          subtitle="Video Flow — 基于 Remotion 的视频渲染 Demo"
          background="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
        />
      </Sequence>
      <Sequence from={SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
        <SlideWrapper
          title="动画驱动"
          subtitle="useCurrentFrame · spring · interpolate"
          background="linear-gradient(135deg, #0f3460 0%, #e94560 100%)"
        />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <SlideWrapper
          title="开始体验"
          subtitle="npm run dev  →  打开 Remotion Studio"
          background="linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
        />
      </Sequence>
    </div>
  );
};
