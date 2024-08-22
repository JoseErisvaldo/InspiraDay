import React from 'react';

const Container = ({ children }) => {
  return (
    <div className={`container bg-gray-200 rounded mt-5 mb-5 border h-[calc(100vh-7rem)] mx-auto p-4`}>
      {children}
    </div>
  );
};

export default Container;
