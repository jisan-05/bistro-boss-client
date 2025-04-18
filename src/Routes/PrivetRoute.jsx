import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
  const location = useLocation();

  const {user,loading} = useAuth()
  if(loading){
    return <span className="loading loading-spinner text-info"></span>
  }

  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;