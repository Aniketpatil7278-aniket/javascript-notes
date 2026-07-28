import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Fundamentals Task
        </Typography>

        <Box className="hidden md:flex gap-4">
          <Button color="inherit" onClick={() => navigate("/")}>
            CallBack_fn          </Button>

          <Button color="inherit" onClick={() => navigate("/promiseopage")}>
            promiseopage
          </Button>

         
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
