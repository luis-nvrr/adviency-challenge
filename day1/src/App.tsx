import GiftList from "./features/gifts/components/GiftList";
import { useEffect } from "react";
import useStore from "./features/gifts/hooks/gifts";
import { Stack, Center } from "@chakra-ui/react";

export default function App() {
  const initializeGifts = useStore((state) => state.fetch);

  useEffect(() => {
    initializeGifts();
  }, []);

  return (
    <Stack>
      <Center>
        <GiftList />
      </Center>
    </Stack>
  );
}
