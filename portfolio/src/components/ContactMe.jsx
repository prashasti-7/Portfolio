import React,{Suspense} from 'react'
import './ContactMe.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
const ContactMe = () => {
  return (
    <div className='flex-5 relative'>
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#B4295B"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Suspense>
    </Canvas>
    {/* <img className='absolute image w-[700px] h-[400px] object-contain top-0 left-0 bottom-[8rem] right-[2rem] m-auto' src='./me2.svg'></img> */}
  </div>
  )
}

export default ContactMe
