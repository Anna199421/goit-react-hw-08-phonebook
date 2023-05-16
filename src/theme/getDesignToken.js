export const getDesignTokens = mode => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: '#dccfd1',
            },
            secondary: {
              main: '#1c4f12',
            },
            background: {
              paper: '#dccfd1',
            },
          }
        : {
            primary: {
              main: '#eceff1',
            },
            secondary: {
              main: '#f57f17',
            },
            background: {
              paper: '#263238',
            },
          }),
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeightLight: 500,
      h1: {
        fontSize: 18,
        fontWeight: 800,
      },
      h2: {
        fontSize: 17,
        fontWeight: 700,
        textTransform: 'uppercase',
      },
    },
    spacing: 8,
  });