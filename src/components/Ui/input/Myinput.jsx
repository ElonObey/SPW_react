import React from "react";
// import classes from "./Myinput.module.css";
import { Input } from "@mui/material";

const Myinput = React.forwardRef((props, ref) => {
  return <Input size="small" ref={ref} {...props} />;
});

export default Myinput;
