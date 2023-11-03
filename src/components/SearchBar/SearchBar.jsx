import {
    Container, Select, IconButton, Input, VStack, Box, StackDivider, FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Center, Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
export const SearchBar = (props) => {
    const { onSearch } = props;
    const neighborhoods = ["Suba", "Usme", "Fontibon", "Simon Bolivar", "en barbiland"];
    const states = ["Rentado", "Sin rentar", "No definido"];
    const [ubication, setUbication] = useState();
    const [state, setState] = useState();
    const [size, setSize] = useState();
    const [price, setPrice] = useState();

    function handleUbication(event) {
        setUbication(event.target.value);
    };

    function handleState(event) {
        setState(event.target.value);
    };

    function handleSize(event) {
        setSize(event.target.value);
    };

    function handlePrice(event) {
        setPrice(event.target.value);
    };

    let onSubmit = (event) => {
        event.preventDefault();
        const filters = { location: ubication, stateProperty: state, squareMeters: size, price: price };
        onSearch(filters);
    };

    return (
        <form onSubmit={onSubmit}>
            <FormControl>
                <FormLabel htmlFor="ubi"><Text as="b">Ubicación</Text></FormLabel>
                <Select id="ubi" variant='filled' placeholder='Ubicación' onChange={handleUbication}>
                    {neighborhoods.map((neighborhood) =>
                        <option key={neighborhood}>{neighborhood}</option>
                    )}
                </Select>
                <FormLabel htmlFor="state"><Text as="b">Estado del apartamento</Text></FormLabel>
                <Select id="state" variant='filled' placeholder='Estado' onChange={handleState}>
                    {states.map((state) =>
                        <option key={state}>{state}</option>
                    )}
                </Select>
                <FormLabel htmlFor="size" as="b"><Text as="b">Tamaño del apartamento</Text></FormLabel>
                <Input id="size" type="number" variant='filled' placeholder="Metros cuadrados" onChange={handleSize}></Input>
                <FormLabel htmlFor="price"><Text as="b">Precio</Text></FormLabel>
                <Input id="price" type="number" variant='filled' placeholder="Precio" onChange={handlePrice}></Input>
            </FormControl>
            <Center>
                <IconButton mt={4} aria-label='Search database' icon={<SearchIcon />} colorScheme="blue" type="submit" width={"100px"}></IconButton>
            </Center>
        </form>
    );
}