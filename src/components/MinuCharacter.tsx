"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MinuCharacter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "inline-block animate-fade-in-bounce",
        "transition-opacity duration-500 ease-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src='/images/logos/MinuCharacter.svg'
        alt='MINU Logo'
        width={118}
        height={86}
        priority
      />
    </div>
  );
}
