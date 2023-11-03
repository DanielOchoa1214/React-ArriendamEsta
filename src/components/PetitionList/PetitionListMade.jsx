import { useEffect, useState, useContext } from "react";
import { getPetitionstoUser } from "../../services/PetitionServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import PetitionMade from "../Petition/PetitionMade";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";

export default function PetitionListMade() {
    const [petitionsMades, setPetitionsMades] = useState([]);
    const [context, setContext] = useContext(ArriendamEstaContext);

    useEffect(() => {
        getPetitionstoUser(context.id).then((res) => setPetitionsMades(res));
    }, []);

    return (
        <Box>
            <UnorderedList listStyleType={"none"}>
                {petitionsMades.map((petitionMade, key) => (
                    <PetitionMade key={key} petitionMade={petitionMade}/>
                ))}
            </UnorderedList>
        </Box>
    );
}