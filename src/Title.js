// src/Title.js
import React from 'react';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';

function Title() {
    // Define breakpoints for different screen sizes
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1200px)' });
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1201px)' });

    // Set the font size based on screen size
    const fontSize = isSmallScreen ? '3rem' : isMediumScreen ? '4rem' : '5rem';

    return (
        <Typography
            className = "Title"
            variant="h2"
            component="h1"
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
            The Mona Lisa
        </Typography>
    );
}

export default Title;
