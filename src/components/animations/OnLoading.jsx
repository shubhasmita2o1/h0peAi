import React from "react";
import { BounceLoader } from "react-spinners";

export default function OnLoading() {
  return (
    <div
      id="loading"
      style={{
        height: "100dvh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BounceLoader color="#fc552f" />
    </div>
  );
}
