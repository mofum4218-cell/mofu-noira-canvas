// src/crops/pages/noira-liquid/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // シーン、カメラ、レンダラー
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 背景テクスチャ
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/sample/wave.png"); // public/sample/green.png に置く

    // シェーダーマテリアル
    const uniforms = {
      uTime: { value: 0 },
      uTexture: { value: texture },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform sampler2D uTexture;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          // 簡単な水面っぽい歪み
          uv.y += 0.03 * sin(uv.x * 20.0 + uTime * 2.0);
          uv.x += 0.03 * cos(uv.y * 20.0 + uTime * 1.5);
          vec4 color = texture2D(uTexture, uv);
          gl_FragColor = color;
        }
      `,
    });

    // ジオメトリ（板）
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // アニメーションループ
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    // クリーンアップ
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

