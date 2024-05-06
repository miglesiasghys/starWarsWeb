import { Box, Container, Grid } from "@mui/material";
import CardPeople from "../components/CardPeople";
import { useEffect } from "react";
import usePeople from "../hooks/usePeople";

export default function ContainPeople() {
    const { allPeople, getAllPeople } = usePeople();

    useEffect(() => {
        getAllPeople();
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(https://i.pinimg.com/564x/56/b7/3d/56b73d7666037c4e7ea675c7493b5fbc.jpg)`,
            minHeight: "70vh",
            width: "100%",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
        }}>
            <Container sx={{ display: "flex", justifyContent: "center", alignContent:"center", padding: "20px 0px" }}>
                <Grid container>
                    {allPeople.map((elem) => (
                        <CardPeople key={elem.name} people={elem} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
