import React from 'react'

export const UserContext = React.createContext({
    userDetails: {},
    error: "",
    getAPIData: ()=>{},
})