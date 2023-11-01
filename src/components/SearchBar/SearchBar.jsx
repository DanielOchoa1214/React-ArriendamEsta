import { Container, Select, IconButton, Input, VStack, Box, StackDivider} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const SearchBar = () => {
    return ( <>
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={2}
        align='stretch'
        >
            <Select placeholder='Ubicación'>
                <option value='option1'>Suba</option>
                <option value='option2'>Paloquemado</option>
                <option value='option3'>En la mierda</option>
            </Select>
            <Select placeholder='Estado'>
                <option value='option1'>Rentado</option>
                <option value='option2'>Sin Rentar</option>
                <option value='option3'>No definido</option>
            </Select>
            <Input type="number" placeholder="Metros Cuadrados"></Input>
            <Input type="number" placeholder="Precio"></Input>
            <IconButton aria-label='Search database' icon={<SearchIcon />} colorScheme="blue"/>
        </VStack>
    </>
    );
}