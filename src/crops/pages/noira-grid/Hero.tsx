"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // サイズ
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 10, 20);
    camera.lookAt(0, 0, 0);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 🌐 グリッド風の床
    const gridSize = 200;
    const divisions = 40;
    const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x00ffff, 0x00ffff);
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.4;
    scene.add(gridHelper);

    // 床のワイヤーフレーム（PlaneGeometry）
    const geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // ライト（少し雰囲気）
    const ambientLight = new THREE.AmbientLight(0x00ffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      // グリッドと床を手前に流す（無限っぽさ）
      plane.position.z += 0.5;
      if (plane.position.z > 20) plane.position.z = 0;

      gridHelper.position.z += 0.5;
      if (gridHelper.position.z > 20) gridHelper.position.z = 0;

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

