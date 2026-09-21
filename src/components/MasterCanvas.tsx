import { useEffect, useState } from "react";

interface MasterCanvasProps {
  children: React.ReactNode;
}

const MASTER_WIDTH = 1460;
const MASTER_HEIGHT = 900;

export default function MasterCanvas({
  children,
}: MasterCanvasProps) {
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : MASTER_HEIGHT
  );

  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const newScale = Math.min(
        viewportWidth / MASTER_WIDTH,
        1
      );

      setScale(newScale);
      setViewportHeight(viewportHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const scaledWidth = MASTER_WIDTH * scale;
  const scaledHeight = MASTER_HEIGHT * scale;

  /*
   * Never allow the MasterCanvas itself to create more
   * vertical space than the viewport.
   *
   * Anything beyond the viewport is clipped.
   */
  const containerHeight = Math.min(
    scaledHeight,
    viewportHeight
  );

  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: `${scaledWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: `${MASTER_WIDTH}px`,
          height: `${MASTER_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}