import React, {useState} from 'react'
import { UserContext } from './user-context';

export const UserContextProvider = (props) => {

  const [userDetails, setUserDetails] = useState({});
  const [id, setId] = useState(-1);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

    const getData = ()=>{
        const url = `https://randomuser.me/api/?results=10`
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            const {results, status, ok} = response;
            if (ok === true) {
                setLoading(false);
              }
              if (status === 200) {
                setIsSuccess(true);
              }
            if(results){
                setUserDetails(results);
                console.log(userDetails)
            }
        })
        .catch((error)=>{
            setError(error);
        })
    }

    const getUserId = (index)=>{
        setId(index);
    }

    const contextValue = {
        isFetching: loading,
        isSuccess: isSuccess,
        error: error,
        userDetails: userDetails,
        getAPIData: getData,
        getId: getUserId, 
        id: id,
    };


    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;