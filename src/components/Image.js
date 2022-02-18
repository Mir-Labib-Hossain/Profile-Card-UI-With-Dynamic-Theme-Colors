import React from "react";

export default function Image({ src, alt, width }) {
  return (
    <div>
      <img src={src} alt={alt} width={width} />
    </div>
  );
}
