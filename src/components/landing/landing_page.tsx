"use client";

import { TypewriterEffect } from "@/utils";
import React, { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { RoutesSelection } from "./RoutesSelection";

interface props {
  animation: unknown;
}

export const LandingPageContent: React.FC<props> = ({ animation }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animate, setAnimate] = useState(false);

  let direction: 1 | -1 = 1;

  const onJSONLoad = () => {
    if (targetRef.current?.textContent !== "") return;

    if (targetRef.current)
      TypewriterEffect(targetRef.current, "MahBlog", 150, onFinishType);
  };

  const onFinishType = () => {
    if (!descRef.current) return;

    TypewriterEffect(
      descRef.current,
      "Where you can share, learn, and reflect whatever you write and read.",
      35,
      () => setAnimate(true)
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="min-w-[325px] max-w-[600px]">
        <Lottie
          lottieRef={lottieRef}
          animationData={animation}
          loop={false}
          onDOMLoaded={onJSONLoad}
          onComplete={() => {
            direction = direction === 1 ? -1 : 1;
            lottieRef.current?.setDirection(direction);
            lottieRef.current?.play();
          }}
        />
      </div>

      <div className="flex flex-col gap-[2px] text-center">
        <div
          ref={targetRef}
          className="font-bold font-sourceSerif4 text-4xl h-[40px]"
        ></div>

        <div ref={descRef} className="text-xl h-fit"></div>
      </div>

      <RoutesSelection animate={animate} />
    </div>
  );
};
