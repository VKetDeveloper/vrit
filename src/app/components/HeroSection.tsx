'use client';

import React from 'react';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
    'https://cdn.vrugd.jp/img/California_KV.png',
    'https://cdn.vrugd.jp/img/vket_Italia.png',
    'https://cdn.vrugd.jp/img/fukuoka.png',
];

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 10',
                minHeight: '300px',
                overflow: 'hidden',
            }}
        >
            <Swiper
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{ width: '100%', height: '100%' }}
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <motion.img
                            src={src}
                            alt={`Hero ${idx + 1}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default HeroSection;
