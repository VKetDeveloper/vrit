'use client';

import React from 'react';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 10', // 16:10比率を維持
                minHeight: '300px',
                overflow: 'hidden',
            }}
        >
            <motion.img
                src="https://cdn.vrugd.jp/img/vket_Italia.png"
                alt="Hero"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
        </Box>
    );
};

export default HeroSection;
