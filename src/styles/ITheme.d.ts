interface ITheme {
  color: {
    orange: string;
    gray: string;
    black: string;
    white: string;
    blue: string;
  };
  fonts: {
    h1: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    h2: {
      fontSize: number;
      color: string;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
      color: string;
    };
    h4: {
      fontSize: number;
      color: string;
    };
    p: {
      fontSize: number;
      color: string;
    };
    pBold: {
      fontSize: number;
      color: string;
      fontWeight: string;
    };
  };
  spaces: {
    x00: number;
    x0: number;
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
    x9: number;
    x10: number;
    x11: number;
    x12: number;
    x13: number;
    x14: number;
    x15: number;
    x16: number;
    x17: number;
    x18: number;
    x19: number;
    x20: number;
    x25: number;
    x30: number;
    x35: number;
    x40: number;
    x50: number;
    x60: number;
  };
}
