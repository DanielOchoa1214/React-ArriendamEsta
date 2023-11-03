import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/UserServices";
import { useContext } from "react";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";

export default function Register() {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        mode: "onChange"
    });

    const [context, setContext] = useContext(ArriendamEstaContext);


    const onSubmit = (data) => {
        createUser(data).then((res) => {
            console.log(res);
            setContext(data);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading size='lg' marginBottom={1}>Crea tu cuenta</Heading>
                <Stack spacing={6} direction='row' flexWrap={'wrap'}>
                    <Box >
                        <FormControl isInvalid={errors.name}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="name">Nombre</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                id="name" 
                                {...register("name", {
                                    required: "El nombre es obligatorio",
                                    minLength: {
                                        value: 3,
                                        message: "El nombre es muy corto"
                                    }
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.name && errors.name.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <FormControl isInvalid={errors.phoneNumber}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="phone-number">Numero telefonico</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                type="number" 
                                id="phone-number" 
                                {...register("phoneNumber", {
                                    required: "El contacto es obligatorio",
                                    minLength: {
                                        value: 10,
                                        message: "El contacto es invalido"
                                    }
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <FormControl isInvalid={errors.birthDate}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="birth-date">Fecha de nacimiento</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                type="date" 
                                id="birth-date" 
                                {...register("birthDate", {
                                    required: "La fecha de nacimiento es obligatoria",
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.birthDate && errors.birthDate.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <FormControl isInvalid={errors.gender}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="gender">Genero</FormLabel>
                                <Select 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                id="gender" 
                                placeholder="Genero"
                                {...register("gender", {
                                        required: "El genero es obligatorio",
                                    })}>
                                    <option value={"HOMBRE"}>HOMBRE</option>
                                    <option value={"MUJER"}>MUJER</option>
                                    <option value={"OTRO"}>OTRO</option>
                                </Select>
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.gender && errors.gender.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                    </Box>
                    <Box >
                        <FormControl isInvalid={errors.email}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="email">Correo Electronico</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                id="email" 
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: 'El correo es invalido'
                                    },
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.email && errors.email.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="password">Contraseña</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                id="password" 
                                type="password" 
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener minimo 8 caracteres"
                                    },
                                    pattern: {
                                        value: /\d+/i,
                                        message: 'La contraseña debe tener minimo un numero'
                                    },
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.password && errors.password.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <FormControl isInvalid={errors.confirmPassword}>
                            <Box>
                                <FormLabel 
                                marginBlock={'1rem 0'}
                                color={'brand.600'}
                                fontWeight={600}
                                htmlFor="confirm-password">Confirmar Contraseña</FormLabel>
                                <Input 
                                errorBorderColor={'brand.300'}
                                _focusVisible={{borderColor:'#f5247d'}}
                                id="confirm-password" 
                                type="password" 
                                {...register("confirmPassword", {
                                    validate: {
                                        matchPasswords: (x) => x === getValues("password") || "Las contraseñas no coinciden",
                                    },
                                })} />
                                <FormErrorMessage color={'brand.300'} fontWeight={600}>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
                            </Box>
                        </FormControl>
                        <Button 
                        border={'2px solid'}
                        marginTop={10}
                        w={'100%'}
                        _hover={{bg: 'brand.300', color: 'white'}}
                        type="submit">Crear cuenta</Button>
                    </Box>
                </Stack>
            </form>
        </>
    );
}