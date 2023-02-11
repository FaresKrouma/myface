import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { ThemeProvider } from "styled-components";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <DarkModeContextProvider>
        {(darkMode) => (
          <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
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
        )}
      </DarkModeContextProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
    textSoft: "darkgray",
    border: "#444",
    shadow: "#ffbaba2c",
    media: {
      tv: "screen and (min-width: 1202px)",
      desktop: "screen and (max-width: 1201px)",
      laptop: "screen and (max-width: 1025px)",
      ipad: "screen and (max-width: 961px)",
      mobile: "screen and (max-width: 481px)",
    },
  },
  light: {
    backgroundColor: "#f1f1f1",
    text: "black",
    backgroundSoft: "#dfdfdf",
    logo: "tomato",
    textSoft: "#555",
    border: "lightgray",
    shadow: "#bfbfbf5a",
    media: {
      tv: "screen and (min-width: 1202px)",
      desktop: "screen and (max-width: 1201px)",
      laptop: "screen and (max-width: 1025px)",
      ipad: "screen and (max-width: 961px)",
      mobile: "screen and (max-width: 481px)",
    },
  },
};
