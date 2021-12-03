import React from "react";
import useStore from "../hooks/gift";
import { Stack, Heading, List, ListItem, ListIcon } from "@chakra-ui/layout";
import { FaCandyCane } from "react-icons/fa";

const GiftList: React.FC = () => {
  const gifts = useStore((state) => state.gifts);

  return (
    <Stack alignItems="center" padding={3} marginBottom={3}>
      <Heading>Regalos:</Heading>
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
