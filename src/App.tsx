import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignUp } from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import UsersPage from "./pages/UsersPage";
import ActiveTodos from "./pages/ActiveTodos";
import CompeletedTodos from "./pages/CompletedTodos";
import { UserDetail } from "./pages/UserDetail";

export const App = () => {
  return (
    <>
      <ToastContainer
        autoClose={30000}
        position={"top-center"}
        hideProgressBar={true}
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route
          path="/active"
          element={
            <ProtectedRoute>
              <ActiveTodos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/completed"
          element={
            <ProtectedRoute>
              <CompeletedTodos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/userdetail"
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />

        {/* Default Page Active Todos */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ActiveTodos />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
