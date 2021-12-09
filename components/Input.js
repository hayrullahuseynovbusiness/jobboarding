import React from "react";

function Input({ placeholder, ref, Icon }) {
  return (
    <div className="flex-1 p-2 border border-gray-300 rounded-md focus-within:border-green-600 flex items-center">
      <input
        type="text"
        className="flex-1"
        ref={ref}
        placeholder={placeholder}
      />
      <Icon size="22px" className="text-green-600" />
    </div>
  );
}

export default Input;
