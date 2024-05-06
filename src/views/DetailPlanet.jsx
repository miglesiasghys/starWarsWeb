import { Container } from "@mui/material";
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import usePlanet from "../hooks/usePlanet";

export default function DetailPlanet() {
    const { id } = useParams();
    const { onePlanet, getOnePlanet } = usePlanet();

    useEffect(() => {
        getOnePlanet(id);
    }, []);

    return (
        <Container>
            <h1>{onePlanet.name}</h1>
        </Container>
    );
}