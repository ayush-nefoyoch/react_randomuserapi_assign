import React, {useState} from 'react'
import { UserContext } from './user-context';

export const UserContextProvider = (props) => {

  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");

    const getData = ()=>{
        const url = `https://randomuser.me/api/?results=10`
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            const {results} = response;
            if(results){
                setUserDetails(results);
                console.log("ee",results)
                console.log(userDetails);
            }
        })
        .catch((error)=>{
            setError(error);
        })
    }

    const contextValue = {
        error: error,
        userDetails: userDetails,
        getAPIData: getData
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;