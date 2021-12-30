import React from 'react'

export const UserContext = React.createContext({
    isFetching: false,
    isSuccess: false,
    userDetails: {},
    error: "",
    getAPIData: ()=>{},
    id: -1,
    getId: (id)=>{}
})