import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CardPlanet from "../components/CardPlanet";
import usePlanet from '../hooks/usePlanet'

export default function ContainPlanet() {
    const { allPlanets, getAllPlanets} = usePlanet()

    useEffect(()=>{getAllPlanets()}, [])

    return (
        <Box
        sx={{
            backgroundImage: `url(https://i.pinimg.com/564x/56/b7/3d/56b73d7666037c4e7ea675c7493b5fbc.jpg)`,
            minHeight: "70vh",
            width: "100%",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
        }}
        >
            <Container>
                <Grid container spacing={2} direction="column">
                {allPlanets.map((elem) => (
                        <CardPlanet key={elem.name} planet={elem} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}