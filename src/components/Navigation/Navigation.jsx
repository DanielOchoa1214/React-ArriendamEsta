import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, ListItem, UnorderedList, useDisclosure, Box, Icon, Text } from "@chakra-ui/react";
import { BiHomeAlt2 } from 'react-icons/bi';
import { PiSignOutFill } from 'react-icons/pi';
import { IoPersonOutline, IoArchiveOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box className="nav-menu-button" bgColor={'brand.300'}>
                <Button borderRadius={0} variant='ghost' _hover={{ bg: 'brand.600' }} onClick={onOpen}><HamburgerIcon color={'white'} /></Button>
            </Box>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"} style={{ width: 'minmax(150px , 500px)'}} >
                <DrawerOverlay />
                <DrawerContent bgColor="brand.300" style={{ maxWidth: '200px'}}>
                    <DrawerHeader className="drawer-text">Menu</DrawerHeader>
                    <DrawerBody >
                        <UnorderedList listStyleType={"none"}>
                            <ListItem className="drawer-text" marginBlock={4} _hover={{ color: 'brand.600', }} >
                                <Link to={"/search"} style={{display: 'flex', alignItems:'center'}} >
                                    <Icon as={BiHomeAlt2} marginRight={4} />
                                    <Text>
                                        Inicio
                                    </Text>
                                </Link>
                            </ListItem>
                            <ListItem className="drawer-text" marginBlock={4} _hover={{ color: 'brand.600', }} >
                                <Link to={"/profile"} style={{display: 'flex', alignItems:'center'}} >
                                    <Icon as={IoPersonOutline} marginRight={4} />
                                    <Text>
                                        Perfil
                                    </Text>
                                </Link>
                            </ListItem>
                            <ListItem className="drawer-text" marginBlock={4} _hover={{ color: 'brand.600', }} >
                                <Link to={"/home"} style={{display: 'flex', alignItems:'center'}} >
                                    <Icon as={PiSignOutFill} marginRight={4} />
                                    <Text>
                                        Cerrar sesión
                                    </Text>
                                </Link>
                                <Link to={"/petition"} style={{display: 'flex', alignItems:'center'}} >
                                    <Icon as={IoArchiveOutline} marginRight={4} />
                                    <Text>
                                        Peticiones
                                    </Text>
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}