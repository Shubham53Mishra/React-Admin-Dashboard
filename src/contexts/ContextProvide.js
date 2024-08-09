import React, { Children, createContext, useContext, useState } from 'react';
import { Cart, Chat, Notification } from '../components';
import { userProfileData } from '../data/dummy';

const StateContext = createContext();

const initialState ={
    Chat:false ,
    Cart: false,
    userProfileData: false,
    Notification: false,
}
export const ContextProvider =( {Children}) => {
    const [activeMenu,setActiveMenu] =useState (true);
    return  (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
            }}
          >  
          {Children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext (StateContext)
