'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function AboutPage() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        px: 4,
        py: 8,
        backgroundColor: '#fff0f5',
      }}
    >
      <Typography variant="h3" gutterBottom>
        このイベントについて
      </Typography>
      <Typography variant="body1" fontSize="1.2rem">
        VketReal in YOKOSUKAは、VR技術を活用した新しい形のイベントです。参加者は、リアルな会場での体験を通じて、さまざまなコンテンツや出展者と直接交流することができます。
      </Typography>
    </MotionBox>
  );
}
