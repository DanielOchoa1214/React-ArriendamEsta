import { useEffect, useState, useContext } from "react";
import { getPetitionsFromUser } from "../../services/PetitionServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Petition from "../Petition/Petition";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";

export default function PetitionList() {
    const [petitions, setPetitions] = useState([]);
    const [context, setContext] = useContext(ArriendamEstaContext);

    useEffect(() => {
        getPetitionsFromUser(context.id).then((res) => setPetitions(res));
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