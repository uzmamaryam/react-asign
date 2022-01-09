import React from "react";
const initialState = {
  Schools: [
    { id: 1, title: "APS Gul Mohar school", City:"Karachi"},
    { id: 2, title: "F.G Public School", City:"Gujranwala" },
  ],
 
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.Schools;

      case "ADDSchools":
          console.log(action.payload)
          const newSchools=[]
          newSchools.push(action.payload)
      return {
          ...state,
          Schools: [...state.Schools, ...newSchools]
      }

    default:
      return state
  }
};

export default reducer;