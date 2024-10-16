"use client"

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useThree, Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const { scene } = useThree();
  const sphereRef = useRef();

  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshNormalMaterial();
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    return () => {
      scene.remove(sphere);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  useEffect(() => {
    const animate = () => {
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return null;
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <AnimatedSphere />
        </Canvas>
      </div>
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
    </section>
  );
}