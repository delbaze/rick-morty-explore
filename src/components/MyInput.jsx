import {forwardRef} from "react";
const MyInput = forwardRef((props, ref) =>  {
  return <input ref={ref} type="test" />;
})

export default MyInput;
