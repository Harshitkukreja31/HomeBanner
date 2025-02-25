import React from 'react';

const Button = ({
  children,
  width = 'auto',
  theme = 'purple',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-colors duration-200 ease-in-out";
  
  const themeStyles = {
    white: "bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white",
    purple: "bg-purple-600 text-white hover:bg-white hover:text-purple-600 border hover:border-purple-600"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${themeStyles[theme]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ width }}
    >
      {children}
    </button>
  );
};
export default Button;