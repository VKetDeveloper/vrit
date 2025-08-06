// app/layout.tsx
'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "https://03859756c98c5fff41e61fca8eccaa33@o4509796344922112.ingest.us.sentry.io/4509796345839616",
  sendDefaultPii: true
});
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
