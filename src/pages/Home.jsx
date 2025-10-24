
import { useEffect, useState } from "react";
import { getUsers } from "../api";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
 

  useEffect(() => {
    getUsers().then((data) => {
      const localUsers = JSON.parse(localStorage.getItem("addedUsers")) || [];
      setUsers([...data, ...localUsers]);
      console.log("data",data)
    });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

 
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <SearchBar value={search} onChange={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {currentUsers.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? "secondary" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}

        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;

