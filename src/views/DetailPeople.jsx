import { Container } from "@mui/material";
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import usePeople from "../hooks/usePeople";

export default function DetailPeople() {
    const { id } = useParams();
    const { onePeople, getOnePeople } = usePeople();

    useEffect(() => {
        getOnePeople(id);
    }, []);

    return (
        <Container>
            <h1>{onePeople.name}</h1>
        </Container>
    );
}