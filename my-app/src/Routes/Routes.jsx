import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../components/Dashboard";
import Products from "../Pages/Products";
import Login from "../components/Login";
import Categories from "../Pages/Categories";
import Brands from "../Pages/Brands";
import FormForProduct from "../components/FormForProduct";
import FormForCategory from "../components/FormForCategory";
import Register from "../components/Register";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/FormForProduct" element={<FormForProduct />} />
          <Route path="/FormForCategory" element={<FormForCategory />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}
