import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './style/ModelViewer.css'; // Import the CSS file for styling

const ModelViewer = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl);

    return (
        <div className = "ModelMonaLisa">
            <Canvas className = "Canvas" camera={{ position: [0, 0, 10], fov: 100 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

                <primitive object={scene} scale={[1.5, 1.5, 1.5]} /> 

                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
};
export default ModelViewer;
