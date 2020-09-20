export interface Theme {
  borderRadius: string;
  colors: {
    white: string;
    black: string;
    gray: string;
    main: string;
    secondary: string;
    accent: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  font: string;
}

const theme: Theme = {
  borderRadius: '8px',
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#f5f5f5',
    main: '#d6d6d6',
    secondary: '#616161',
    accent: '#e38212',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
  font: 'Poppins',
};

export default theme;
