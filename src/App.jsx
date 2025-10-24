import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
