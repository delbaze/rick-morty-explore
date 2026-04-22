import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Toggle = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return children({ show, toggleShow });
  //   return children;
};

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return render(position);
}

function RenderPropsPage() {
  return (
    <div>
      RenderPropsPage
      <Toggle>
        {({ show, toggleShow }) => (
          <div>
            {show ? "on" : "off"}
            <button onClick={toggleShow}>Click toggle</button>
          </div>
        )}
      </Toggle>
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ position: "absolute", left: x, top: y }}>😭</div>
        )}
      />
    </div>
  );
}

export default RenderPropsPage;
