import { memo } from "react";

function Input({ type, value, onChange, ...otherProp }) {
  if (
    type === "text" ||
    type === "number" ||
    type === "password" ||
    type === "email"
  ) {
    return (
      <input
        id={otherProp?.id}
        className={otherProp?.className}
        value={value ?? ""}
        onChange={onChange}
        type={type}
        placeholder={otherProp?.placeholder}
      />
    );
  } else {
    return <input type="text" />;
  }
}

export default memo(Input);

// Structure
// {
//   id: "",
//   type: "",
//   ...
// }
