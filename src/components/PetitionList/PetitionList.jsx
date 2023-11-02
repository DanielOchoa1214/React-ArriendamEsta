import { useEffect, useState } from "react";
import { getPetitionsFromUser } from "../../services/PetitionServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Petition from "../Petition/Petition";

export default function PetitionList() {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        getPetitionsFromUser("mojoDojoCasaHouse").then((res) => setPetitions(res));
    }, []);

    return (
        <Box>
            <UnorderedList listStyleType={"none"}>
                {petitions.map((petition, key) => (
                    <Petition key={key} petition={petition}/>
                ))}
            </UnorderedList>
        </Box>
    );
}