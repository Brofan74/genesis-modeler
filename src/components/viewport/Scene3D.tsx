import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} />
      <OrbitControls 
        enableDamping 
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={20}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
      
      {/* Grid */}
      <Grid 
        args={[20, 20]} 
        cellColor="#333"
        sectionColor="#555"
        fadeDistance={30}
        fadeStrength={1}
      />
      
      {/* Sample 3D Object - Placeholder */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.2} />
      </mesh>
      
      <mesh position={[0, 0.5, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
}

export const Scene3D = () => {
  return (
    <div className="w-full h-full bg-viewport">
      <Canvas shadows>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};
