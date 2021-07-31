import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

ReactDOM.render(
  <MoralisProvider appId="MKy6h0LZM9SGwdDB6SofLoseYVqkBGm4fdiCoNuP" serverUrl="https://cryayhlmk2vd.moralis.io:2053/server">
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </MoralisProvider>,
  document.getElementById("root"),
);