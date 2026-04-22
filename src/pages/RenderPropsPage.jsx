import React from "react";
import { useState } from "react";

const Toggle = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return children({ show, toggleShow });
  //   return children;
};

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
    </div>
  );
}

export default RenderPropsPage;
