import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/Login";
import Profile from "@/pages/Profile";
import AddRecipe from "@/pages/AddRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user-info" element={<Profile />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
