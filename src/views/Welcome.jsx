import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePeople from "../hooks/usePeople";

export default function Welcome() {
    const navigate = useNavigate();

    const { allPeople, getPeopleCarrusel } = usePeople();

    useEffect(() => {
        getPeopleCarrusel();
    }, []);

    return (
        <Box
            sx={{
                backgroundImage: `url(https://i.pinimg.com/564x/56/b7/3d/56b73d7666037c4e7ea675c7493b5fbc.jpg)`,
                minHeight: "60vh",
                width: "100%",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h1"
                    component="h2"
                    gutterBottom
                    sx={{
                        color: "#d5bb93",
                        textShadow: "black 2px 2px 4px",
                        fontFamily: "StarJedi",
                        fontSize: "60px",
                        padding: "70px 0px"
                    }}
                >
                    Welcome to Star Wars
                </Typography>
                <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                        backgroundImage:"linear-gradient(to right, #324541, #3a4a42, #434e43, #4d5244, #575647)",
                        color: "#fcf6d6",
                        fontFamily: "Roboto Mono",
                        fontSize: "16px",
                        padding: "10px 20px",
                        boxShadow: "#ccab08 0px 3px 8px"
                    }}
                >
                    This is a simple web app to show information about StarWars _
                </Typography>
                <Box
                    sx={{ display: "flex", justifyContent: "space-around", width: "50%", padding: "60px" }}
                >
                    <Button
                        variant="text"
                        size="large"
                        sx={{ backgroundColor: "#998108", m: 2, color: "white", display: "block", fontFamily: "Roboto Mono" }}
                        onClick={() => navigate("/people")}
                    >
                        People
                    </Button>
                    <Button
                        variant="text"
                        size="large"
                        sx={{ backgroundColor: "#998108", m: 2, color: "white", display: "block", fontFamily: "Roboto Mono" }}
                        onClick={() => navigate("/planet")}
                    >
                        Planets
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}