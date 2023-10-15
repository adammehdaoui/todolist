import React from 'react';

function createItemHeader({ createType }) {
  const headerText = `Create new ${createType}`;

  return (
    <header className="pb-2 border-b border-gray-200">
      <p className="font-bold ml-2 mt-2">
        { headerText }
      </p>
    </header>
  );
}

export default createItemHeader;
