import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/Auth/UserSlice";

export const ProtectedRouters = () => {
  const dispatch = useDispatch();
  const Localtoken = JSON.parse(localStorage.getItem("userAccessToken"));
  dispatch(addUser(Localtoken));
  return <>{Localtoken ? <Outlet /> : <Navigate to={"/auth"} />}</>;
};
