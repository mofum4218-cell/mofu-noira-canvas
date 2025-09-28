"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // サイズ
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 基本セットアップ
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // パーティクル的に小さい球を配置
    const count = 200;
    const geometry = new THREE.SphereGeometry(0.4, 12, 12);
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    scene.add(mesh);

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    // アニメーション
    const color = new THREE.Color();
    let frameId: number;
    const animate = () => {
      const time = Date.now() * 0.0005;
      for (let i = 0; i < count; i++) {
        const hue = (time + i * 0.01) % 1;
        color.setHSL(hue, 1, 0.5);
        mesh.setColorAt(i, color);
      }
      mesh.instanceColor!.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // リサイズ対応
    const handleResize = () => {
      const w = mountRef.current?.clientWidth || window.innerWidth;
      const h = mountRef.current?.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100vh", background: "black" }}
    />
  );
};

