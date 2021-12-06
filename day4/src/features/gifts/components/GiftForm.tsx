import React from "react";
import {
  FormControl,
  InputGroup,
  Input,
  Button,
  InputLeftElement,
  FormLabel,
  chakra,
} from "@chakra-ui/react";
import useStore from "../hooks/gift";
import { FaGift } from "react-icons/fa";

const CFaGift = chakra(FaGift);

const GiftForm = () => {
  const addGift = useStore((state) => state.addGift);
  
  const [description, setDescription] = React.useState<string>("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addGift(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl isRequired>
        <FormLabel>Nuevo Regalo</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointer="none"
            children={<CFaGift color="gray.500" />}
          />
          <Input
            onChange={handleDescriptionChange}
            size="md"
            placeholder="Regalo"
            value={description}
            width="15rem"
          />
          <Button paddingX={8} marginLeft={4} colorScheme="green" type="submit">
            Pedir!
          </Button>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default GiftForm;
