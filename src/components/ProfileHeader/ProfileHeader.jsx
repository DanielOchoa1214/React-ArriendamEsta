import { Box, Container, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import profilePic from "../../assets/profile-img.jpeg";
import { getUser } from "../../services/UserServices";
import { useEffect, useState } from "react";

export default function ProfileHeader() {
    const [userBasicInfo, setBasicInfo] = useState({});

    let onLoadProfile = () => {
        getUser("65123726c9692445567e5652").then((res) => setBasicInfo(res))
    };

    useEffect(() => {
        onLoadProfile();
    }, [])

    return (
        <>
            <Wrap h={"50%"} spacing='60px'p={"1rem"}>
                <Image src={profilePic} borderRadius={"full"} maxW="300px" w={"30vw"}/>
                <WrapItem flexDirection={"column"} justifyContent={"center"}>
                    <Heading>{userBasicInfo.name}</Heading>
                    <Text>Calificacion</Text>
                </WrapItem>
            </Wrap>
        </>
    );
}