import { useEffect, useState } from "react";
import { getPropertiesFromUser } from "../../services/PropertyServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Property from "../Property/Property";

export default function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getPropertiesFromUser("1").then((res) => setProperties(res));
    }, []);


    return (
        <Box>
            <UnorderedList>
                {properties.map((property, key) => (
                    <Property key={key} property={property}/>
                ))}
            </UnorderedList>
        </Box>
    );
}