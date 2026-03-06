import React, { forwardRef } from "react";

const NextImage = forwardRef<HTMLImageElement, any>(({ src, alt, width, height, fill, priority, ...props }, ref) => {
  const style: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: (props.style?.objectFit as any) || "cover" }
    : {};
  return (
    <img
      ref={ref}
      src={typeof src === "object" ? src.src || src.default : src}
      alt={alt || ""}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : "lazy"}
      style={{ ...style, ...props.style }}
      className={props.className}
    />
  );
});
NextImage.displayName = "NextImage";
export default NextImage;
