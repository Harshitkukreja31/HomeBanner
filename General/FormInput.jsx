import React from 'react';

const FormInput = ({ 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  label, 
  error,
  placeHolder ,
  maxlen,
  autoComp,
  req
}) => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 text-gray-800">
      <label htmlFor={id} className="md:w-1/2 text-left">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
        placeholder={placeHolder}
       maxLength={maxlen}
       autoComplete={autoComp}
       required={req}
      />
      
    </div>
    {error && <p className="mt-1 w-full text-sm text-red-500">{error}</p>}
    </>
  );
};

export default FormInput;