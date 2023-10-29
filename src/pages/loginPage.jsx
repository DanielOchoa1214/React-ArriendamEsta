import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    let onLogin = () => {
        navigate("/search");
    }

    return (
        <>
            <Button onClick={onLogin}>Login</Button>
        </>
    );
}