"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 20, 60);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffaa, 2, 500);
    scene.add(sunLight);

    // 🌞 太陽
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // 🌍 地球
    const earthOrbit = new THREE.Object3D(); // 地球の軌道用オブジェクト
    scene.add(earthOrbit);

    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x2266ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(15, 0, 0);
    earthOrbit.add(earth);

    // 🌙 月
    const moonOrbit = new THREE.Object3D(); // 月の軌道用
    earth.add(moonOrbit);

    const moonGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(4, 0, 0);
    moonOrbit.add(moon);

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      // 自転
      sun.rotation.y += 0.002;
      earth.rotation.y += 0.02;
      moon.rotation.y += 0.05;

      // 公転
      earthOrbit.rotation.y += 0.005; // 地球が太陽の周りを回る
      moonOrbit.rotation.y += 0.05; // 月が地球の周りを回る

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

