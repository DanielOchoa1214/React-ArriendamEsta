import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, ListItem, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navigation(){

    const {isOpen, onOpen, onClose} = useDisclosure();
    
    return (
        <>
            <Button onClick={onOpen}><HamburgerIcon/></Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <UnorderedList listStyleType={"none"}>
                            <ListItem><Link to={"/search"}>Inicio</Link></ListItem>
                            <ListItem><Link to={"/profile"}>Perfil</Link></ListItem>
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}