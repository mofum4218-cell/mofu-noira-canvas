import { getSection } from "@/lib/getSection";
import { renderSection } from "@/crops/renderers";
import { ThemeProvider } from "styled-components";
import { getTheme } from "@/greenhouse/themes/colors";
import { GlobalThemeStyle } from "@/greenhouse/themes/GlobalThemeStyle";

export default function Home() {
  const section = getSection("hero");
  const theme = getTheme((section?.theme || "forest") as "forest" | "ocean" | "dark");
  return (
    <ThemeProvider theme={theme}>
      <GlobalThemeStyle />
      {section && renderSection(section)}
    </ThemeProvider>
  );
}


