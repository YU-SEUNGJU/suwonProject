import React, {Component} from 'react';

const basicBtn = ({text, onClick}) => {
  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
};

export default basicBtn;