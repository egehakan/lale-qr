// src/Title.js
import React from 'react';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';

function ArtistName() {
    // Define breakpoints for different screen sizes
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1200px)' });
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1201px)' });

    // Set the font size based on screen size
    const fontSize = isSmallScreen ? '1.5rem' : isMediumScreen ? '3rem' : '4rem';

    return (
        <Typography
            className = "ArtistName"
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: fontSize,
                maxWidth: '100%',
            }}
        >
            Leonardo da Vinci
        </Typography>
    );
}

export default ArtistName;
