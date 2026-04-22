import { useState } from "react";
// const data = ["a", "b", "c"];
const withMyArray = (Component) => (props) => {
    const [state, setState] = useState(["a", "b", "c"])
  return <Component {...props} data={state} setState={setState} />;
};
export default withMyArray;
