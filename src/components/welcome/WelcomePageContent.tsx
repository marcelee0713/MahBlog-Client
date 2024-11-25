"use client";

import { ROUTES } from "@/shared/constants/routes";
import { TypewriterEffect } from "@/shared/utils";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { UnderLineButton } from "../UnderLineButton";

interface props {
  animation: unknown;
}

export const WelcomePageContent = ({ animation }: props) => {
  const router = useRouter();

  const targetRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const name = useSearchParams().get("name");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animate, setAnimate] = useState(false);

  let direction: 1 | -1 = 1;

  const onJSONLoad = () => {
    if (targetRef.current?.textContent !== "") return;

    if (targetRef.current)
      TypewriterEffect(
        targetRef.current,
        `Welcome${name ? ` ${name}` : ""}!`,
        50,
        onFinishType
      );
  };

  const onFinishType = () => {
    if (!descRef.current) return;

    TypewriterEffect(
      descRef.current,
      `In order to start writing, we have to verify you first by sending you an email verification link to your email address!`,
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

      <div className="flex flex-col gap-2 text-center">
        <div
          ref={targetRef}
          className="font-bold font-sourceSerif4 text-4xl h-[40px]"
        ></div>

        <div ref={descRef} className="text-lg h-fit "></div>

        <div
          className={`text-sm theme-accent-text-color ${
            animate ? "animate-animfadeBelow visible" : "invisible"
          }`}
        >
          {
            "Your account will be deleted if you haven't verified it for the pass 7 days. "
          }
        </div>

        <div
          className={`w-fit self-center ${
            animate ? "animate-animfadeBelow visible" : "invisible"
          }`}
        >
          <UnderLineButton
            onClick={() => router.push(ROUTES["Signin"])}
            text="Sign in"
          />
        </div>
      </div>
    </div>
  );
};
