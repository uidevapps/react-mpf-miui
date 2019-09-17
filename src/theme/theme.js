import { createMuiTheme } from "@material-ui/core/styles";
import {PRIMARY_COLOR,SECONDARY_COLOR} from "./colors";
export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: SECONDARY_COLOR
    },
    primary: {
      main: PRIMARY_COLOR
    }
  },
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(",")
  }
});
