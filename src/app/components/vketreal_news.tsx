'use client';
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';





export default function VketReal_News() {

  return (
    <Box
      sx={{
      px: { xs: 2, sm: 4 },
      py: 6,
      maxWidth: '90%',
      mx: 'auto',
      opacity: 0,
      transform: 'translateY(30px)',
      animation: 'fadeInUp 1s ease-out forwards',
      }}
    >
      <style>
      {`
        @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
        }
      `}
      </style>
      <Typography variant="body1" sx={{ mb: 3 }}>
      有志開催は募集中。詳しくは
      <MuiLink
        href="https://x.com/VketReal/status/1950817761070125178"
        rel="noopener noreferrer"
        underline="always"
      >
        こちら
      </MuiLink>
      をご覧ください。
      </Typography>
    </Box>
  );
}
