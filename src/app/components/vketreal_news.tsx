'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';






export default function VketReal_News() {

  return (
    <Box
      sx={{
      px: { xs: 2, sm: 4 },
      py: 6,
      maxWidth: '1200px',
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
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 3,
          p: { xs: 2, sm: 4 },
          mb: 3,
          border: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          📢全国のVketRealを有志でやってみたいぞー🔥ってみんな‼<br />
          全国のVketRealを繋ぐディスコードサーバーがあるからこっちにもぜひ参加してね✨<br />
          VketReal本体の情報も共有したりするから興味のある人は気軽にJOIN👍<br />
          <br />
          参加はこちらから👇<br />
          <Box
            component="a"
            href="https://t.co/WAHjBJg6oA"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 2,
              background: '#5865F2',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 2,
              transition: 'transform 0.2s',
              animation: 'boing 1.2s infinite',
              '&:hover': {
                background: '#4752C4',
                textDecoration: 'none',
                transform: 'scale(1.08)',
              },
            }}
          >
            VketReal Discordサーバー
            <style>
              {`
                @keyframes boing {
                  0%, 100% { transform: scale(1); }
                  20% { transform: scale(1.08); }
                  40% { transform: scale(0.97); }
                  60% { transform: scale(1.05); }
                  80% { transform: scale(0.98); }
                }
              `}
            </style>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
