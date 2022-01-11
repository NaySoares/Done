import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#E2E8F0", "#0E141B")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      extra: {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#1DA1F1", "#1DA1F1")(props),
      textUnderLineOffset: 3,
    }),
  },
};

const fonts = {
  headind: "'Hebbo'",
  text: "'Hebbo'",
};

const colors = {
  glassTeal: "#2C7A7B",
  blueTwitter: "#1DA1F1",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  components,
  fonts,
  colors,
  config,
});

export default theme;
