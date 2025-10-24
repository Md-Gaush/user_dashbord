import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("addedUsers")) || [];
    const found = localUsers.find((u) => u.id.toString() === id);

    if (found) {
      setUser(found);
    } else {
      getUserById(id)
        .then(setUser)
        .catch(() => setUser(null));
    }
  }, [id]);

  if (!user) return <p>User not found or loading...</p>;

  return (
    <div>
      <Button variant="outline" onClick={() => navigate("/")} className="mb-4">
        ← Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          {user.website && (
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          )}
          {user.company && (
            <p>
              <strong>Company:</strong> {user.company.name || user.company}
            </p>
          )}
          {user.address && (
            <p>
              <strong>Address:</strong> {user.address.city},{" "}
              {user.address.street}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
