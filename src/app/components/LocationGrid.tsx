'use client';

import { useRef, useEffect } from 'react';
import { Box, Typography, CardMedia, Link as MuiLink } from '@mui/material';
import Grid from '@mui/material/Grid';

const locations = [
    {
        id: 1,
        name: 'VketReal in Yokosuka',
        image: 'https://cdn.vrugd.jp/img/VR_yokosuka_KV.png',
        url: 'https://yokosuka.vrit.jp', 
    },
    {
        id: 2,
        name: 'VketReal in Fukuoka',
        image: 'https://cdn.vrugd.jp/img/fukuoka.png',
        url: 'https://fukuoka.vrit.jp',
    },
    {
        id: 3,
        name: 'VketReal in SAPPORO',
        image: 'https://cdn.vrugd.jp/img/vris_stamprally.png',
        url: 'https://sapporo.vketreal.jp',
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
                        <MuiLink
                            href={loc.url}
                            underline="none"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ display: 'block', height: '100%' }}
                        >
                            <Box
                                ref={(el) => { itemRefs.current[i] = el as HTMLDivElement | null; }}
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: '16 / 10',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    opacity: 0,
                                    transform: 'translateY(40px)',
                                    transition:
                                        'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), box-shadow 0.3s, transform 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#eee',
                                    cursor: 'pointer',
                                    willChange: 'transform',
                                    '&:hover': {
                                        boxShadow: 8,
                                        transform: 'scale(1.08) translateY(-4px)',
                                        transition:
                                            'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.97) translateY(0)',
                                        transition:
                                            'transform 0.12s cubic-bezier(.34,1.56,.64,1), box-shadow 0.1s',
                                    },
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
                                        aspectRatio: '16 / 10',
                                        objectPosition: 'center',
                                        backgroundColor: '#ddd',
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
                        </MuiLink>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
