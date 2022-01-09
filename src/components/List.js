import React from "react";
import  { useSelector } from 'react-redux'

const List = () => {
  const Schools = useSelector((state) => state.Schools);
  return (
    <div>
       { Schools && Schools.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.City}</p>
        </div>
      ))}
    </div>
  );
};

export default List;