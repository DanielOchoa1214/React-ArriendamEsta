<<<<<<< Updated upstream
import Navigation from "../components/Navigation";
=======
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Navigation from "../components/Navigation/Navigation";
import ProfileBody from "../components/ProfileBody/ProfileBody";
import { Container } from "@chakra-ui/react";
>>>>>>> Stashed changes

export default function ProfilePage() {
    return (
        <>
<<<<<<< Updated upstream
            <Navigation/>
=======
            <Navigation />
            <Container maxW='90vw'>
                <ProfileHeader />
                <ProfileBody />
            </Container>
>>>>>>> Stashed changes
        </>
    );
}