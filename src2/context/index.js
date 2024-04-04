import React, {createContext, useState } from "react";

export const NameContext = createContext();

const NameProvider = (props)=> {
    const [userData,setUserData]=useState({name:"", age:""})
    return <NameContext.Provider {...props} value={{name:userData.name, age:userData.age,setUserData:setUserData}} />;
};

export { NameProvider};
