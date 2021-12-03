import React from "react";
import { Flex, Stack, Box, Divider, Heading } from "@chakra-ui/react";
import GiftList from "../features/gifts/components/GiftList";
import useStore from "../features/gifts/hooks/gift";
import pattern from "../assets/pattern.jpg";
import GiftForm from "../features/gifts/components/GiftForm";

const HomeScreen: React.FC = () => {
  const fetchAll = useStore((state) => state.fetchAll);

  React.useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      bgGradient="radial-gradient(circle, rgba(243,189,86,1) 0%, rgba(245,138,35,1) 33%, rgba(255,174,48,1) 100%);"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center" direction="column" justifyContent="center">
        <Stack
          borderRadius="xl"
          backgroundImage={`url(${pattern})`}
          padding="20%"
        >
          <Box
            height="100%"
            mb={3}
            borderRadius="xl"
            boxShadow="md"
            padding={8}
            backgroundColor="whiteAlpha.900"
          >
            <Stack>
              <Heading>Regalos:</Heading>
              <GiftForm />
              <Divider color="grey.500" />
              <GiftList />
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default HomeScreen;
