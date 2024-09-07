import React, { useRef } from 'react';
import ModelViewer from './ModelViewer';
import './style/App.css';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from './Title';
import ArtistName from './ArtistName';
import ArtDesc from './ArtDesc';

function App() {
  const artDescRef = useRef(null); // Create a ref for the ArtDesc component

  const handleLearnMoreClick = () => {
    if (artDescRef.current) {
      artDescRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to ArtDesc when Learn More is clicked
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src="../assets/lale-icon.png" alt="icon" className="header-icon" />
          <Title />
        </div>
      </header>
      <div className="App-body">
        <Divider className="Divider" />
        <ModelViewer modelUrl="../assets/the_mona_lisa.glb" />
        <Divider className="Divider" />
        <div className="ArtistDesc">
          <div className="ArtistDescHeader">
            <ArtistName />
            <Button
              className="LearnMore"
              variant="contained"
              color="primary"
              onClick={handleLearnMoreClick} // Add click handler
            >
              Learn More ⬇
            </Button>
          </div>
        </div>
        {/* Pass the ref to ArtDesc */}
        <ArtDesc ref={artDescRef} />
      </div>
    </div>
  );
}

export default App;
