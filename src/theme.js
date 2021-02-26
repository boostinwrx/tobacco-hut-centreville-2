import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import normalize from "./utils/normalize.css";
// A custom theme for this app
const theme = createMuiTheme(
{normalize});

export default theme;