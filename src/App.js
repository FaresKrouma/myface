import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { ThemeProvider } from "styled-components";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <>
        <ThemeProvider theme={theme.dark}>
          <Navbar />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // flexWrap: "nowrap",
            }}
          >
            <LeftBar />
            <Outlet />
            <RightBar />
          </div>
        </ThemeProvider>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

const theme = {
  dark: {
    backgroundColor: "#222",
    text: "#e1e1e1",
    backgroundSoft: "#333",
    logo: "white",
    textSoft: "lightgray",
    border: "#444",
  },
  light: {
    backgroundColor: "white",
    text: "black",
    backgroundSoft: "#f6f3f3",
    logo: "tomato",
    textSoft: "#555",
    border: "lightgray",
  },
};
