'use client';
import { Box, Typography } from '@mui/material';

export default function InfoBanner() {
  return (
    <Box sx={{ backgroundColor: '#e2007a', py: 4, textAlign: 'center' }}>
    <Typography variant="h5" color="white">
      現在企画中のため、次回更新までお待ちください。
    </Typography>
    </Box>
  );
}
