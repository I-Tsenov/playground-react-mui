import { styled } from "@mui/material";
import MuiBox from "@mui/material/Box";
import theme from "../../theme";

export const MainWrapper = styled(MuiBox)`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[100]} 100%);
  padding: ${theme.spacing(3)} 0;
  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.spacing(4)} 0;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    padding: ${theme.spacing(6)} 0;
  }
`;
