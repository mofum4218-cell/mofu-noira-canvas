import surfaceSet from "./surface.json";
import { ThemeName, SurfaceName } from "./surface.types";

export const getSurfaceColor = (theme: ThemeName, surface: SurfaceName): string => {
  return surfaceSet[theme][surface];
};

