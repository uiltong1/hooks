import React, { forwardRef, useImperativeHandle, useState } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const [text, setText] = useState("");

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (text.length > 3) {
          setText("");
        }
      },
    };
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
});

export default SomeComponent;
