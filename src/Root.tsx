import React from "react";
import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld/HelloWorld";
import { LogoAnimation } from "./LogoAnimation/LogoAnimation";
import { SlideShow } from "./SlideShow/SlideShow";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LogoAnimation"
        component={LogoAnimation}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SlideShow"
        component={SlideShow}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
