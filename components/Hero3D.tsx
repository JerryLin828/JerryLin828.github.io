'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const points = useRef<THREE.Points>(null!)
  const { viewport } = useThree()

  const particlesCount = 1000

  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * viewport.width * 2
      arr[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [particlesCount, viewport])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.05
      points.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#0ea5e9"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

function FloatingShape() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      <ParticleField />
      <FloatingShape />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />

      {/* Background gradient mesh */}
      <mesh position={[0, 0, -5]} scale={[20, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial>
          <canvasTexture
            attach="map"
            image={(() => {
              const canvas = document.createElement('canvas')
              canvas.width = 512
              canvas.height = 512
              const ctx = canvas.getContext('2d')!
              const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256)
              gradient.addColorStop(0, '#0369a1')
              gradient.addColorStop(0.5, '#0284c7')
              gradient.addColorStop(1, '#0a0a0a')
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, 512, 512)
              return canvas
            })()}
          />
        </meshBasicMaterial>
      </mesh>
    </Canvas>
  )
}