import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme";
import "@fontsource/ubuntu/400.css";
import "@fontsource/nerko-one/400.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);