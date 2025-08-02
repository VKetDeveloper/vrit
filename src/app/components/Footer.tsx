'use client';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(8px)',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} サイト名. All rights reserved.
            </Typography>
        </Box>
    );
}
