import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          <ColorModeScript intialColorMode={theme.config.intialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
