import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Login from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignupPage.jsx";
import Search from "./pages/SearchPage.jsx"; // Assuming you have these components
import Recipe from "./pages/RecipePage.jsx"; // Assuming you have these components

export default function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
      
    </div>
  );
}
