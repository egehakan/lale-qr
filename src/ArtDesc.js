import React, { useEffect, useRef, useState, forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Use forwardRef to pass ref from parent (App component)
const ArtDesc = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const localRef = useRef(null); // Internal ref for the IntersectionObserver

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.4, // Trigger when 30% of the component is visible
      }
    );

    const currentRef = ref || localRef;

    if (currentRef.current) {
      observer.observe(currentRef.current);
    }

    return () => {
      if (currentRef.current) {
        observer.unobserve(currentRef.current);
      }
    };
  }, [ref]);

  return (
    <Box
      ref={ref || localRef} // Use either the ref passed from parent or the internal ref
      className="ArtDesc-container"
      sx={{
        padding: '20px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      
      {/* Body: Two paragraphs of information about the art */}
      <Typography variant="body1" paragraph>
        The Mona Lisa is a portrait painting by the Italian Renaissance artist Leonardo da Vinci. It is considered one of the most famous and influential works of art in history. The painting depicts a woman with an enigmatic expression, often described as mysterious or elusive. The use of sfumato, a technique that creates a soft, gradual transition between colors and tones, contributes to the painting’s lifelike quality.
      </Typography>
      <Typography variant="body1" paragraph>
        Painted between 1503 and 1506, the Mona Lisa has been housed in the Louvre Museum in Paris since 1797. The subject’s identity has been widely debated, with many believing it to be Lisa Gherardini, a Florentine woman. The painting’s fame grew due to its innovative artistic techniques, the intrigue surrounding its theft in 1911, and its enduring status as a symbol of Western art.
      </Typography>
      <Typography className = "Location" variant="subtitle1" component="p" sx={{ marginTop: '20px' }}>
        ⚲ Louvre Museum, Paris, France
      </Typography>
    </Box>
  );
});

export default ArtDesc;
