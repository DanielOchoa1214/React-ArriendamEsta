import { Box, Container, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import profilePic from "../../assets/profile-img.jpeg";
import { getUser } from "../../services/UserServices";
import { useContext, useEffect, useState } from "react";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";

export default function ProfileHeader() {
    const [userBasicInfo, setBasicInfo] = useState({});
    const [context, setContext] = useContext(ArriendamEstaContext);

    console.log(context);

    let onLoadProfile = () => {
        getUser(context.id).then((res) => setBasicInfo(res))
    };

    useEffect(() => {
        onLoadProfile();
    }, [])

    return (
        <>
            <Wrap h={"50%"} spacing='60px'p={"1rem"}>
                <Image src={profilePic} borderRadius={"500px"} maxW="300px" w={"30vw"} aspectRatio={'2 / 1'} objectFit={'cover'} />
                <WrapItem flexDirection={"column"} justifyContent={"center"}>
                    <Heading>{userBasicInfo.name}</Heading>
                    <Text>Calificacion</Text>
                </WrapItem>
            </Wrap>
        </>
    );
}