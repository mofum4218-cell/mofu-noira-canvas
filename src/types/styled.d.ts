import "styled-components";
import { spacing } from "@/greenhouse/themes/spacing";
import { radius } from "@/greenhouse/themes/radius";
import { typography } from "@/greenhouse/themes/typography";
import { breakpoints } from "@/greenhouse/themes/breakpoints/breakpoints";

type Spacing = typeof spacing;
type Radius = typeof radius;
type Typography = typeof typography;
type Breakpoints = typeof breakpoints;

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    text: string;
    primary: string;
    secondary: string;
    hover: string;
    accent: string;

    /** ✅ 追加ここから */
    surface: string;
    /** ✅ 追加ここまで */

    spacing: Spacing;
    radius: Radius;
    typography: Typography;
    breakpoints: Breakpoints;
  }
}

