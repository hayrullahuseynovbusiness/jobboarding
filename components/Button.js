import React from "react";

function Button({ children }) {
  return (
    <button className="transition duration-200 py-2 px-6 bg-green-600 hover:bg-green-500 text-white rounded-full">
      {children}
    </button>
  );
}

export default Button;
