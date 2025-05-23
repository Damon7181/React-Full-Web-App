// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Pages/Home";
// import Dashboard from "../components/Dashboard";
// import Products from "../Pages/Products";
// import Login from "../components/Login";
// export default function Root() {
//   return (
//     <Router>
//       <Dashboard>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/Products" element={<Products />}></Route>
//         </Routes>
//       </Dashboard>

//       <Route path="/Login" element={<Login />}></Route>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../components/Dashboard";
import Products from "../Pages/Products";
import Login from "../components/Login";

export default function Root() {
  return (
    <Router>
      <Routes>
        {/* Routes that should use the Dashboard layout */}
        <Route
          element={<Dashboard />} // This is the wrapper
        >
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Route>

        {/* Routes that should not use the Dashboard layout */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
