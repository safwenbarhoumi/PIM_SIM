import { createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#DAA520",
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      color: "#ffFFFF",
    },
    text: {
      primary: "#FFF8DC",
      hint: "#FFE4C4",
    },
    background: {
      paper: "#800000",
    },
  },
});

export { darkTheme };
