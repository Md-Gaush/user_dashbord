import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const handleAddUser = (newUser) => {
    const existing = JSON.parse(localStorage.getItem("addedUsers")) || [];
    const updated = [...existing, { id: Date.now(), ...newUser }];
    localStorage.setItem("addedUsers", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
      <UserForm onSubmit={handleAddUser} />
    </div>
  );
};

export default AddUser;
