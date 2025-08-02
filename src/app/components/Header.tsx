import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const navItems = [
    { label: '概要', href: '/about' },
    { label: '企画', href: '/project' },
    { label: 'チケット', href: '/ticket' },
    { label: 'グッズ', href: '/goods' },
];

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        サイトロゴ
                    </Typography>
                    {/* PC表示 */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                component={Link}
                                href={item.href}
                                sx={{ textTransform: 'none' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                    {/* スマホ表示 */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label}>
                            <ListItemButton
                                component={Link}
                                href={item.href}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
