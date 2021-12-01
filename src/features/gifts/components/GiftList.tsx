import React from "react";
import useStore from "../hooks/gifts";
import gift from "../services/gift";
import { Stack, List, ListItem, Heading, Center } from "@chakra-ui/react";

const GiftList: React.FC = () => {
  const gifts = useStore((state) => state.gifts);

  return (
    <Stack>
      <Heading>Regalos:</Heading>
      <Center>
        <List>
          {gifts.map((gift) => (
            <ListItem key={gift.id}>{gift.description}</ListItem>
          ))}
        </List>
      </Center>
    </Stack>
  );
};

export default GiftList;
