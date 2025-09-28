"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // サイズ設定
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    camera.position.z = 500;

    // レンダラー
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 🌌 星を生成
    const starCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // リサイズ対応
    const handleResize = () => {
      const newWidth = mountRef.current?.clientWidth || width;
      const newHeight = mountRef.current?.clientHeight || height;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        overflow: "hidden",
      }}
    />
  );
};

