import React from "react";
import NeralStyle from "./NeralStyle/NeralStyle";
import Crime from "./Crime/Crime";
import BackButton from "../BackButton"
export default function DataHome() {
  return (
    <div>
      <Crime />
      <NeralStyle />
      <BackButton />
    </div>
  );
}
