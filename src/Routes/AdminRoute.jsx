import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-info"></span>;
    }
    if(user && isAdmin){
      return children;
    }
    <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
