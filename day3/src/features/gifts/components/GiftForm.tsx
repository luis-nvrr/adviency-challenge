import React, { ChangeEvent, FormEvent } from "react";
import {
  FormControl,
  FormLabel,
  InputLeftElement,
  Button,
  Input,
  InputGroup,
  FormErrorMessage,
  chakra,
} from "@chakra-ui/react";
import useStore from "../hooks/gift";
import { FaGift } from "react-icons/fa";

const CFaGift = chakra(FaGift);

const GiftForm: React.FC = () => {
  const [description, setDescription] = React.useState<string>("");
  const addGift = useStore((state) => state.addGift);

  const handleGiftChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onGiftSubmit = (event: FormEvent) => {
    event.preventDefault();
    addGift(description);
    setDescription("");
  };

  return (
    <form onSubmit={onGiftSubmit}>
      <FormControl isRequired>
        <FormLabel>Agregar regalo:</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<CFaGift color="gray.500" />}
          />
          <Input
            width="15rem"
            onChange={handleGiftChange}
            value={description}
            size="md"
            placeholder="Regalo"
          />
          <Button
            colorScheme="green"
            marginLeft={3}
            paddingX={10}
            type="submit"
          >
            Pedir!
          </Button>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default GiftForm;
