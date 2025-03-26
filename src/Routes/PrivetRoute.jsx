import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const location = useLocation();

  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <span className="loading loading-spinner text-info"></span>
  }

  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;