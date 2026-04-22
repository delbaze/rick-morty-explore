import { Navigate, Outlet } from "react-router";
import { useGetMeQuery } from "../slices/authApi";

function ProtectedRoute() {
  const { isLoading, error, data } = useGetMeQuery();

  if (isLoading) return <div>Vérification de la session...</div>;
  if (error) return <Navigate to="/login" replace />;
  return <Outlet />;
}


export default ProtectedRoute