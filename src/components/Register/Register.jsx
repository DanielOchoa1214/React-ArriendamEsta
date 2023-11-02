import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
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
            setContext({id: res.id});
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Crea tu cuenta</Heading>
                <FormControl isInvalid={errors.name}>
                    <Box>
                        <FormLabel htmlFor="name">Nombre</FormLabel>
                        <Input id="name" {...register("name", {
                            required: "El nombre es obligatorio",
                            minLength: {
                                value: 3,
                                message: "El nombre es muy corto"
                            }
                        })} />
                        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.phoneNumber}>
                    <Box>
                        <FormLabel htmlFor="phone-number">Numero telefonico</FormLabel>
                        <Input type="number" id="phone-number" {...register("phoneNumber", {
                            required: "El contacto es obligatorio",
                            minLength: {
                                value: 10,
                                message: "El contacto es invalido"
                            }
                        })} />
                        <FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.birthDate}>
                    <Box>
                        <FormLabel htmlFor="birth-date">Fecha de nacimiento</FormLabel>
                        <Input type="date" id="birth-date" {...register("birthDate", {
                            required: "La fecha de nacimiento es obligatoria",
                        })} />
                        <FormErrorMessage>{errors.birthDate && errors.birthDate.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.gender}>
                    <Box>
                        <FormLabel htmlFor="gender">Genero</FormLabel>
                        <Select id="gender" placeholder="Genero" 
                            {...register("gender", {
                                required: "El genero es obligatorio",
                            })}>
                            <option value={"HOMBRE"}>HOMBRE</option>
                            <option value={"MUJER"}>MUJER</option>
                            <option value={"OTRO"}>OTRO</option>
                        </Select>
                        <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                    <Box>
                        <FormLabel htmlFor="email">Correo Electronico</FormLabel>
                        <Input id="email" {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                message: 'El correo es invalido'
                            },
                        })} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                    <Box>
                        <FormLabel htmlFor="password">Contraseña</FormLabel>
                        <Input id="password" type="password" {...register("password", {
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
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <FormControl isInvalid={errors.confirmPassword}>
                    <Box>
                        <FormLabel htmlFor="confirm-password">Confirmar Contraseña</FormLabel>
                        <Input id="confirm-password" type="password" {...register("confirmPassword", {
                            validate: {
                                matchPasswords: (x) => x === getValues("password") || "Las contraseñas no coinciden",
                            },
                        })} />
                        <FormErrorMessage>{errors.confirmPassword && errors.confirmPassword.message}</FormErrorMessage>
                    </Box>
                </FormControl>
                <Button type="submit">Crear cuenta</Button>
            </form>
        </>
    );
}