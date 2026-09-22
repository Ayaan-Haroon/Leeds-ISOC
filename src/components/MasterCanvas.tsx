// src/components/MasterCanvas.tsx

import { useEffect, useState } from "react";

interface MasterCanvasProps {
  children: React.ReactNode;
  masterWidth?: number;
  masterHeight?: number;
  clipToViewport?: boolean;
}

const DEFAULT_MASTER_WIDTH = 1460;
const DEFAULT_MASTER_HEIGHT = 900;

export default function MasterCanvas({
  children,
  masterWidth = DEFAULT_MASTER_WIDTH,
  masterHeight = DEFAULT_MASTER_HEIGHT,
  clipToViewport = true,
}: MasterCanvasProps) {
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined"
      ? window.innerHeight
      : DEFAULT_MASTER_HEIGHT
  );

  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const newScale = Math.min(
        viewportWidth / masterWidth,
        1
      );

      setScale(newScale);
      setViewportHeight(viewportHeight);
    };

    updateDimensions();

    window.addEventListener(
      "resize",
      updateDimensions
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateDimensions
      );
    };
  }, [masterWidth]);

  const scaledWidth = masterWidth * scale;
  const scaledHeight = masterHeight * scale;

  const containerHeight = clipToViewport
    ? Math.min(
        scaledHeight,
        viewportHeight
      )
    : scaledHeight;

  return (
    <div
      className={`relative mx-auto ${
        clipToViewport
          ? "overflow-hidden"
          : "overflow-visible"
      }`}
      style={{
        width: `${scaledWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: `${masterWidth}px`,
          height: `${masterHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}