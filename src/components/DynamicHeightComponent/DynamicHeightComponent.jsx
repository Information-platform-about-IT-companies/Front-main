import React, { useState, useEffect, useRef } from "react";

import "./DynamicHeightComponent.scss";

export default function DynamicHeightComponent({ children, extClassName }) {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const newHeight = `${contentRef.current.scrollHeight}px`;
      setHeight(newHeight);
    }
  }, [children]);

  const contentStyle = {
    height,
  };

  return (
    <div className={`dynamic-height-container ${extClassName}`} style={contentStyle}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
