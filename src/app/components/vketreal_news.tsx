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
            href="https://discord.com/invite/qVJfM94Da7"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              px: 2,
              py: 1.5,
              borderRadius: 2,
              background: '#5865F2',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: 2,
              width: '100%',
              transition: 'background 0.2s, transform 0.2s',
              '&:hover': {
                background: '#4752C4',
                textDecoration: 'none',
                transform: 'scale(1.03)',
              },
            }}
          >
            VketReal 公式Discordサーバー
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
