import React from "react";
import { Stack, List, ListItem, ListIcon } from "@chakra-ui/react";
import useStore from "../hooks/gift";
import { Gift } from "../types/gift";
import { FaCandyCane } from "react-icons/fa";

const GiftList = () => {
  const gifts: Gift[] = useStore((state) => state.gifts);

  return (
    <Stack>
      <List>
        {gifts.map((gift) => (
          <ListItem key={gift.id}>
            <ListIcon as={FaCandyCane} color="green.500" />
            {gift.description}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default GiftList;
