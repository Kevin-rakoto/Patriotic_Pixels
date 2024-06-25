import { useNavigate } from "react-router-dom";
import SignUp from "../components/sign-up/SignUp";
import { useTypedSelector } from "../redux/types/hooks";
import { useEffect } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  return (
    <div>
      <SignUp />
    </div>
  )
}

export default SignUpPage