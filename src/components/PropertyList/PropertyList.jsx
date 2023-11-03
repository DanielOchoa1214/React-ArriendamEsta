import { useEffect, useState } from "react";
import { getProperties, getPropertiesFromUser } from "../../services/PropertyServices";
import { Box, UnorderedList } from "@chakra-ui/react";
import Property from "../Property/Property";

export default function PropertyList(props) {

    const {filters} = props;
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties(filters).then((res) => setProperties(res));
    }, [filters]);


    return (
        <Box>
            <UnorderedList>
                {properties.map((property, key) => (
                    <Property key={key} property={property} />
                ))}
            </UnorderedList>
        </Box>
    );
}