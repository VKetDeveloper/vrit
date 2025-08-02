// app/layout.tsx
'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e2007a',
    },
    secondary: {
      main: '#00c4cc',
    },
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(','),
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
