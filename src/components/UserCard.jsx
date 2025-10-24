import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card className="hover:shadow-lg transition ">
      <CardHeader>
        <CardTitle>
          <span className="text-gray-600">Name: </span>{user.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        <p className="text-sm">
          <span className="text-gray-600">Email: </span>{user.email}
        </p>
        <p className="text-sm">
          <span className="text-gray-600">Phone: </span>{user.phone}
        </p>
        <p className="text-sm">
          <span className="text-gray-600">Company: </span>
          {user.company?.name || user.company}
        </p>
      </CardContent>

      <CardFooter>
      <Link key={user.id} to={`/user/${user.id}`}>
        <Button className="w-fit cursor-pointer">Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
