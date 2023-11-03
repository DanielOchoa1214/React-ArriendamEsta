import { AbsoluteCenter, Box, Button, ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {

    return (
        <Box id="bg-login" >
            <AbsoluteCenter p={10} backgroundColor={'rgba(255, 255, 255, 0.3)'} backdropFilter={'blur(5px)'}>
                <Outlet/>
            </AbsoluteCenter>
        </Box>
    );
}