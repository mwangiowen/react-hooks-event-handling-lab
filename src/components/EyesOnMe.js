// Code EyesOnMe Component Here
import React from "react";

export default function EyesOnMe() {
  const handleFocus = () => {
    console.log("Good!");
  };
  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}
