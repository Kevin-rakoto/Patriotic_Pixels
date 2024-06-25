import { useEffect } from "react";
import Login from "../components/login/Login";
import { useTypedSelector } from "../redux/types/hooks";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
