import React, { ReactNode } from "react";
import Image from "next/image";

interface OverlayComponentProps {
  backgroundClassname: string;
  backgroundImage: string;
  overlay?: ReactNode;
  overlayStyle?: React.CSSProperties;
  className?: string;
}

const OverlayComponent: React.FC<OverlayComponentProps> = ({
  backgroundImage,
  overlay,
  overlayStyle,
  className = "",
  backgroundClassname,
}) => {
  return (
    <div
      className={`relative w-[152px] h-[192px] overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className={`absolute object-cover object-center ${backgroundClassname}`}
      />

      {/* Overlay Content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={overlayStyle}
      >
        {overlay}
      </div>
    </div>
  );
};

export default OverlayComponent;
