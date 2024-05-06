import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Box, Stack, Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';

export default function CardPeople({ people }) {
    const navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#ccab08",
        fontFamily:"Roboto Mono"
    }));

    return (
        <Grid item lg={4} sm={6}>
            <Card sx={{ maxWidth: 350, m:"20px", backgroundColor:"#324541", boxShadow: "#ce710c 0px 3px 8px"}}>
                {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
                <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontFamily: "StarJedi", color: "#ccab08", textShadow: "#606265 2px 2px 4px", p:"5px" }}>
                        {people?.name}
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={2}>
                            <Item>Gender: {people.gender}</Item>
                            <Item>Birth: {people.birth_year}</Item>
                        </Stack>
                    </Box>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Button 
                        sx={{fontFamily:"StarJedi", color:"#ccab08"}}
                        size="small"
                        onClick={() =>
                            navigate(
                                `/people/${people.url.substring(
                                    people.url.length - 2,
                                    people.url.length - 1
                                )}`
                            )
                        }
                    >
                        @
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

// "name": "Luke Skywalker", 
//     "height": "172", 
//     "mass": "77", 
//     "hair_color": "blond", 
//     "skin_color": "fair", 
//     "eye_color": "blue", 
//     "birth_year": "19BBY", 
//     "gender": "male", 