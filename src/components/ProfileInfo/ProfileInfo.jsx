import { useEffect, useState } from "react";
import { getUser } from "../../services/UserServices";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";

export default function ProfileInfo() {
    const [userInfo, setInfo] = useState({});

    let onLoadProfile = () => {
        getUser("65123726c9692445567e5652").then((res) => setInfo(res));
    };

    const getAge = () => {
        let today = new Date();
        let birthDate = new Date(userInfo.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return String(age);
    }

    useEffect(() => {
        onLoadProfile();
    }, []);

    return (
        <>
            <TableContainer>
                <Table variant='striped'>
                <Tbody>
                        <Tr>
                            <Td>Email</Td>
                            <Td>{userInfo.email}</Td>
                        </Tr>
                        <Tr>
                            <Td>Numero de contacto</Td>
                            <Td>{userInfo.phoneNumber}</Td>
                        </Tr>
                        <Tr>
                            <Td>Edad</Td>
                            <Td>{getAge()}</Td>
                        </Tr>
                        <Tr>
                            <Td>Genero</Td>
                            <Td>{userInfo.gender}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}