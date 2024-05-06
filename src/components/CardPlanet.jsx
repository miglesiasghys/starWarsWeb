import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, CardMedia, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardPlanet({ planet }) {
    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Grid item columns={2}>
            <Card sx={{ display: "flex", p:"5px" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, m:"1px" }}
                    image="https://i.pinimg.com/564x/cb/dc/b7/cbdcb79857bf980074feff3c1fe1b633.jpg"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {planet?.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Button 
                        sx={{fontFamily:"StarJedi", color:"#ccab08"}}
                        size="small"
                        onClick={() =>
                            navigate(
                                `/planet/${planet.url.substring(
                                    planet.url.length - 2,
                                    planet.url.length - 1
                                )}`
                            )
                        }
                    >
                        @
                    </Button>
                </CardActions>
                </Box>
            </Card>
        </Grid>
    );
}