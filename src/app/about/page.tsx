'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {  Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

export default function AboutPage() {
    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ minHeight: '100vh', py: 8 }}>
                <MotionPaper
                    elevation={4}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    sx={{
                        p: { xs: 3, md: 6 },
                        background: 'linear-gradient(135deg, #fff0f5 60%, #e0e7ff 100%)',
                        borderRadius: 4,
                        boxShadow: 3,
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: '#7c3aed',
                            textAlign: 'center',
                            mb: 3,
                            letterSpacing: 2,
                        }}
                    >
                        このイベントについて
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize="1.2rem"
                        sx={{
                            color: '#333',
                            textAlign: 'center',
                            lineHeight: 1.8,
                        }}
                    >
                        VketReal in YOKOSUKAは、VR技術を活用した新しい形のイベントです。参加者は、リアルな会場での体験を通じて、さまざまなコンテンツや出展者と直接交流することができます。
                    </Typography>
                </MotionPaper>
            </Container>
            <Footer />
        </>
    );
}
