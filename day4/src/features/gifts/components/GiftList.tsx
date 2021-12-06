import {
  ListItem,
  List,
  ListIcon,
  Button,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useStore from "../hooks/gift";
import { FaCandyCane } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const GiftList: React.FC = () => {
  const gifts = useStore((state) => state.gifts);
  const removeGift = useStore((state) => state.deleteGift);

  const handleRemoveGift = (event: any) => {
    event.preventDefault();
    removeGift(Number(event.target.id));
  };

  return (
    <List>
      <Box overflowY="auto" maxHeight="12rem" maxWidth="20rem">
        {gifts.map((gift) => (
          <ListItem key={gift.id}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginRight="4.5rem"
            >
              <Stack direction="row">
                <ListIcon as={FaCandyCane} color="green.500" />
                <Text>{gift.description}</Text>
              </Stack>
              <Button
                size="sm"
                id={gift.id.toString()}
                onClick={handleRemoveGift}
                children={<FaTrashAlt color="red" />}
                backgroundColor="whiteAlpha.900"
              />
            </Stack>
          </ListItem>
        ))}
      </Box>
    </List>
  );
};

export default GiftList;
