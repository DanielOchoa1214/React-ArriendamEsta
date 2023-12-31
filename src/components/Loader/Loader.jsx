import { Center, Spinner } from "@chakra-ui/react";

export default function Loader() {
    return (
        <>
            <Center>
                <Spinner thickness='4px' size='xl' color='brand.300'/>
            </Center>
        </>
    );
}