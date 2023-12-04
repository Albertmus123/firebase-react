import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRouters = () => {
  const token = useSelector((state) => state.auth.token);
  return <>{token ? <Outlet /> : <Navigate to={"/auth"} />}</>;
};
