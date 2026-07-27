import { Card, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const PromiseoPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Typography variant="h4" className="font-bold text-center mb-8">
        Handles the Promises
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {user.map((u) => (
          <Card key={u.id} className="shadow-lg">
            <CardContent className="flex flex-col gap-2">
              <Typography variant="h6" className="font-bold">
                Username: {u.username}
              </Typography>

              <Typography variant="body1">Name: {u.name}</Typography>

              <Typography variant="body1">Email: {u.email}</Typography>

              <Typography variant="body1">Phone: {u.phone}</Typography>

              <Typography variant="body1">City: {u.address.city}</Typography>

              <Typography variant="body1">
                Zipcode: {u.address.zipcode}
              </Typography>

              <Typography variant="body1">Website: {u.website}</Typography>

              <Typography variant="body1">Company: {u.company.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default PromiseoPage;
