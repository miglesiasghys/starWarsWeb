import axios from "axios";
import { useState } from "react";

export default function usePeople() {
    const [allPeople, setAllPeople] = useState([]);
    const [onePeople, setOnePeople] = useState({});

    async function getAllPeople() {
        try {
            const { data } = await axios("https://swapi.dev/api/people");
            setAllPeople(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getPeopleCarrusel() {
        try {
            const { data } = await axios("https://swapi.dev/api/people");
            setAllPeople(data.results.slice(0, 4));
            /* Guarda solo 5 personajes/personas */
        } catch (error) {
            console.log(error);
        }
    }

    async function getOnePeople(id) {
        try {
            const { data } = await axios(`https://swapi.dev/api/people/${id}`);
            setOnePeople(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        allPeople,
        getAllPeople,
        getPeopleCarrusel,
        getOnePeople,
        onePeople,
    };
}