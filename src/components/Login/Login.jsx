import { Heading, FormControl, Box, FormLabel, Input, FormErrorMessage, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/UserServices";
import { useContext, useState } from "react";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [context, setContext] = useContext(ArriendamEstaContext);
    const [incorrectLogin, setIncorrectLogin] = useState(false);

    const onSubmit = (data) => {
        login(data).then((res) => {
            console.log(res);
            setContext(res);
            setIncorrectLogin(false);
            navigate("/search");
        }).catch((err) => {
            setIncorrectLogin(true);
        });
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading textAlign={'center'}>Login</Heading>
                <FormControl isInvalid={errors.email}>
                    <Box>
                        <FormLabel 
                        fontWeight={600}
                        marginBlock={'1rem 0'}
                        htmlFor="email">Correo</FormLabel>
                        <Input 
                        _focusVisible={{borderColor:'#f5247d'}}
                        id="email" {...register("email", {
                            required: "El email es obligatorio"
                        })} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                    <Box>
                        <FormLabel 
                        fontWeight={600}
                        marginBlock={'1rem 0'}
                        htmlFor="password">Contraseña</FormLabel>
                        <Input 
                        type='password'
                        color={'brand.300'}
                        _focusVisible={{borderColor:'#f5247d'}}
                        id="password" {...register("password", {
                            required: "La contraseña es obligatoria"
                        })} />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <Button 
                marginTop={7}
                w={'100%'}
                _hover={{bg: 'brand.300', color: 'white'}}
                type="submit">Login</Button>
                <Text>{incorrectLogin && "Usuario o contraseña incorrectos"}</Text>
            </form>
        </>
    );
}