import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center sticky top-0 bg-white px-6 py-4 shadow-md z-50">
      <h1 className="text-lg font-bold">User Dashboard</h1>
      <div className="flex gap-4">
        <Link to="/">
          <Button >
            Home
          </Button>
        </Link>
        <Link to="/add-user">
          <Button >
            Add User
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
