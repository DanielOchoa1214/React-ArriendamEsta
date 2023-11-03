import { useEffect, useState, useContext } from "react";
import { Text, Button, Modal, ModalHeader, ModalOverlay, ModalContent, ModalFooter,
        ModalCloseButton, ModalBody, useDisclosure, Input } from "@chakra-ui/react";
import { ArriendamEstaContext } from "../../ArriendamEstaContext";
import { createPetitionForUser } from "../../services/PetitionServices";

export default function RequestPopUp(props) {
    const { property, open } = props;
    const [content, setContent] = useState('');
    const [requested, setRequested] = useState(false);
    const [ context, setContext ] = useContext(ArriendamEstaContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (event) => setContent(event.target.value);

    const onRequest = async () => {
        try{
            const response = await createPetitionForUser(false, content, context.id, property.homeOwnerId, property.id);
            onClose();
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    useEffect(() => {
        onOpen();
      }, [onOpen]);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Nueva Petición</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text py='2'>Propiedad: {property.title}</Text>
                <Text py='2'>Ubicación: {property.location}</Text>
                <Text py='2'>Contenido:</Text>
                <Input
                    value={content}
                    onChange={handleChange}
                    placeholder='Escribe un mensaje al propietario!'
                    size='sm'
                  />
              </ModalBody>
              <ModalFooter>
                <Button mr={3} onClick={onRequest} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>
                  Enviar Petición
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>

    );

}