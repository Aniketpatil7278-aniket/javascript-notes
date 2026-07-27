import { Card, CardContent, Typography, Button } from "@mui/material";
import { use } from "react";

const Callbackfun = () => {
  //callbak function demo

  const handlebtn=()=>{
    console.log("btn clicked.........");
  }

  //callback with map
  const users = ["Aniket", "Rahul", "Amit", "om", "vihshal"];


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-80 shadow-lg">
        <CardContent className="flex flex-col items-center gap-4">
          {/* Card Title */}
          <Typography variant="h5" className="font-bold" align="center">
            Student Details
          </Typography>

          {/* Button */}
          <Button variant="contained" className="mt-4" onClick={handlebtn}>
           Callbak function
          </Button>
          {/* Anonymous Callback */}
          <Button variant="contained" color="error" className="mt-4" onClick={()=>{console.log("this is the Anonymous Callback");}}>
            Anonymous Callback 
          </Button>

            {/* callback with map */}
          {users.map((u)=>(
            <Typography key={u}>{u}</Typography>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
export default Callbackfun;
