import theme from "@/styles/theme";
import "styled-components/";

type ThemeType = typeof theme;

declare module "styled-components/" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
