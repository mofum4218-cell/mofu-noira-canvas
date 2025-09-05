export interface Typography {
  fontFamily: {
    sans: string;
    noto: string;
    roboto: string;
    openSans: string;
    system: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };
  fontWeight: {
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    normal: string;
    relaxed: string;
    loose: string;
  };
  letterSpacing: {
    normal: string;
    wide: string;
    wider: string;
  };
  textDecoration: {
    none: string;
    underline: string;
    lineThrough: string;
  };
  responsiveFontSize: {
  [key: string]: {
    mobile: string;
    desktop: string;
  };
};

 }

