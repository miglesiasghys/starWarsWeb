import axios from "axios";
import { useState } from "react";

export default function usePeople() {
    const [allPlanets, setAllPlanets] = useState([]);
    const [onePlanet, setOnePlanet] = useState({});

    async function getAllPlanets() {
        try {
            const { data } = await axios("https://swapi.dev/api/planets");
            setAllPlanets(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getPlanetCarrusel() {
        try {
            const { data } = await axios("https://swapi.dev/api/planets");
            setAllPlanets(data.results);
            /* Guarda solo 5 personajes/personas */
        } catch (error) {
            console.log(error);
        }
    }

    async function getOnePlanet(id) {
        try {
            const { data } = await axios(`https://swapi.dev/api/planets/${id}`);
            setOnePlanet(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        allPlanets,
        getAllPlanets,
        getPlanetCarrusel,
        getOnePlanet,
        onePlanet,
    };
}