'use client';

import { useRef, useEffect } from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';

const locations = [
    {
        id: 1,
        name: '横須賀中央',
        image: 'https://cdn.vrugd.jp/img/vket_Korea.png',
    },
    {
        id: 2,
        name: 'ヴェルニー公園',
        image: 'https://cdn.vrugd.jp/img/vket_Korea.png',
    },
    {
        id: 3,
        name: '三笠公園',
        image: 'https://cdn.vrugd.jp/img/vket_Korea.png',
    },
    {
        id: 4,
        name: 'うみかぜ公園',
        image: 'https://cdn.vrugd.jp/img/vket_Korea.png',
    },
];

function useScrollAnimation() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const elements = refs.current;
        const handleScroll = () => {
            elements.forEach((el) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return refs;
}

export default function LocationGrid() {
    const itemRefs = useScrollAnimation();

    return (
        <Box sx={{ px: { xs: 2, sm: 4 }, py: 6, maxWidth: '1200px', mx: 'auto' }}>
            <Typography variant="h4" gutterBottom>
                開催場所一覧
            </Typography>

            <Grid container spacing={4}>
                {locations.map((loc, i) => (
                    <Grid item key={loc.id} xs={12} sm={6}>
                        <Box
                            ref={(el) => (itemRefs.current[i] = el)}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '16 / 10',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: 3,
                                opacity: 0,
                                transform: 'translateY(40px)',
                                transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={loc.image}
                                alt={loc.name}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    color: '#fff',
                                    p: 2,
                                }}
                            >
                                <Typography variant="h6">{loc.name}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
