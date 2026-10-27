"use client";

import { useState } from "react";

const Test = () => {
  const [bool, setBool] = useState<boolean>();

  console.log(bool);

  return <button onClick={() => setBool((prev) => !prev)}>test</button>;
};

export default Test;
