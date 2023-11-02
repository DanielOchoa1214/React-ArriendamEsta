import { Heading, FormControl, Box, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Login() {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = (data) => {

    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Button><ArrowBackIcon/></Button>
                <Heading>Login</Heading>
                <FormControl isInvalid={errors.email}>
                    <Box>
                        <FormLabel htmlFor="email">Correo</FormLabel>
                        <Input id="email" {...register("email", {
                            required: "El email es obligatorio"
                        })} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                    <Box>
                        <FormLabel htmlFor="password">Contraseña</FormLabel>
                        <Input id="password" {...register("password", {
                            required: "La contraseña es obligatoria"
                        })} />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <Button type="submit">Login</Button>
            </form>
        </>
    );
}