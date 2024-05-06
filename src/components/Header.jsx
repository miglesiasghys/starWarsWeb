import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const pages = ["People", "Planet"];
export default function Header() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ 
                padding:"20px 0px",
                maxWidth: "100%", 
                maxHeight: "38vh", 
                backgroundImage: "linear-gradient(to right, #324541, #3a4a42, #434e43, #4d5244, #575647)" }}>
                <Toolbar sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center" }}>
                    <Box>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{ flexGrow: 1, fontFamily: 'StarJedi', color: "#d5bb93", fontSize: "18vh", padding: "10px", textShadow: "black 2px 2px 4px" }}
                            onClick={() => navigate("/")}
                        >
                            Star Wars
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                sx={{ backgroundColor: "#998108", m: 2, color: "white", display: "block", fontFamily: "Roboto Mono", padding:"10px 15px" }}
                                onClick={() => navigate(`/${page.toLowerCase()}`)}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}