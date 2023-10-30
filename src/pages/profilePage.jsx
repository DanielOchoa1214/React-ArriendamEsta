import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Navigation from "../components/Navigation/Navigation";
import ProfileBody from "../components/ProfileBody/ProfileBody";
import { Container } from "@chakra-ui/react";

export default function ProfilePage() {
    return (
        <>
            <Navigation />
            <Container maxW='90vw'>
                <ProfileHeader />
                <ProfileBody />
            </Container>
        </>
    );
}