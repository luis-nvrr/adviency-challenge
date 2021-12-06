import { Box, Flex, Stack, Heading, Divider } from "@chakra-ui/layout";
import React from "react";
import useStore from "../features/gifts/hooks/gift";
import GiftList from "../features/gifts/components/GiftList";
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
      <Stack alignItems="center" direction="column">
        <Stack
          backgroundImage={`url(${pattern})`}
          borderRadius="xl"
          padding="20%"
        >
          <Box
            height="25rem"
            backgroundColor="whiteAlpha.900"
            borderRadius="xl"
            padding={8}
            boxShadow="md"
          >
            <Stack spacing={3}>
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
