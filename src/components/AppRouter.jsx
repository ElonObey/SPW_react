import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Counter from "../pages/Counter";
import Value from "../pages/Value";
import NavBar from "./Ui/NavBar/NavBar";
import Login from "../pages/Login";
import RequireAurh from "./RequireAuth";
import AuthProvider from "./AuthProvider";

// Сделать динамический роутинг постов

const AppRouter = () => {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="about" element={<About />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        {/* <Route path="posts" element={<Posts />} /> */}
        <Route
          path="posts"
          element={
            <RequireAurh>
              <Posts />
            </RequireAurh>
          }
        />
        <Route path="counter" element={<Counter />} />
        <Route path="value" element={<Value />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
