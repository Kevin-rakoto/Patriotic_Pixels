import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  HomePage,
  ProductsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  CreateShopPage,
} from "./router";
import { AppDispatch } from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { useTypedSelector } from "./redux/types/hooks";
import ActivationPage from "./pages/ActivationPage";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/activation/:activation_token",
    element: <ActivationPage />,
  },
  {
    path: "/historical-tours",
    element: <ProductsPage />,
  },
  {
    path: "/historical-tours/:name",
    element: <ProductDetailsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/shop-create",
    element: <CreateShopPage />,
  },
]);

const App: FC = () => {
  const { loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          <RouterProvider router={router} />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </>
  );
};

export default App;
