'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, CardMedia, Link as MuiLink, Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const locations = [
  {
    id: 1,
    name: 'VketReal in YOKOSUKA',
    image: 'https://cdn.vrugd.jp/img/VR_yokosuka_KV.png',
    url: 'https://yokosuka.vrit.jp',
  },
  {
    id: 2,
    name: 'VketReal in FUKUOKA',
    image: 'https://cdn.vrugd.jp/img/fukuoka_KV2.png',
    url: 'https://fukuoka.vrit.jp',
  },
  {
    id: 3,
    name: 'VketReal in SAPPORO',
    image: 'https://cdn.vrugd.jp/img/sapporo_vket.png',
    url: 'https://sapporo.vketreal.jp',
  },
  {
    id: 4,
    name: 'VketReal in KANSAI',
    image: 'https://cdn.vrugd.jp/img/kansai_osaka_KV.png',
    url: 'https://kansai.vrit.jp',
  },
  {
    id: 5,
    name: 'VketReal in NAGOYA',
    image: 'https://cdn.vrugd.jp/img/nagoya_KV.png',
    url: '#',
  },
  {
    id: 6,
    name: 'VketReal in HIROSHIMA',
    image: 'https://cdn.vrugd.jp/img/hiroshima_KV.png',
    url: '#',
  },
  {
    id: 7,
    name: 'VketReal in YOKOHAMA',
    image: 'https://cdn.vrugd.jp/img/yokohama_KV.png',
    url: '#',
  },
  {
    id: 8,
    name: 'VketReal in SHIZUOKA',
    image: 'https://cdn.vrugd.jp/img/sizuoka_KV.png',
    url: '#',
  },
  {
    id: 9,
    name: 'VketReal in Kichijoji & Mitaka',
    image: 'https://cdn.vrugd.jp/img/inogashira_KV.png',
    url: '#',
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
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(locations.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 6, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        有志開催一覧
      </Typography>

      <Grid container spacing={4}>
        {locations.map((loc, i) => (
          <Grid key={loc.id} xs={12} sm={6}>
            <MuiLink
              href={loc.url}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', height: '100%' }}
            >
              <Box
                ref={(el) => {
                  itemRefs.current[i] = el as HTMLDivElement | null;
                }}
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
                    'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1), box-shadow 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#eee',
                  cursor: 'pointer',
                  willChange: 'transform',
                  '&:hover': {
                    boxShadow: 8,
                    transform: 'scale(1.08) translateY(-4px)',
                    transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s',
                  },
                  '&:active': {
                    transform: 'scale(0.97) translateY(0)',
                    transition: 'transform 0.12s cubic-bezier(.34,1.56,.64,1), box-shadow 0.1s',
                  },
                }}
              >
                {!loadedImages[i] && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{ position: 'absolute', top: 0, left: 0 }}
                  />
                )}
                <CardMedia
                  component="img"
                  image={loc.image}
                  alt={loc.name}
                  onLoad={() => handleImageLoad(i)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    backgroundColor: '#ddd',
                    aspectRatio: '16 / 10',
                    display: loadedImages[i] ? 'block' : 'none',
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
