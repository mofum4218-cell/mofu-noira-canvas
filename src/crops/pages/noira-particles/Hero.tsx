// src/crops/pages/noira-particles/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
`;

export const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let animationId: number;

    const init = async () => {
      if (!mountRef.current) return;

      // 🎨 Supabase から text.svg を取得
      const textImg = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/text.svg", 600);

      if (!textImg.data?.signedUrl) return;

      // 🔧 Three.js 基本セットアップ
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        5000
      );
      camera.position.z = 800;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // 📷 画像読み込み
      const loader = new THREE.TextureLoader();
      const textTexture = await loader.loadAsync(textImg.data.signedUrl);

      // 🖼️ Canvas に SVG を描画
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const imgSize = 512;
      canvas.width = imgSize;
      canvas.height = imgSize;
      ctx.drawImage(textTexture.image as HTMLImageElement, 0, 0, imgSize, imgSize);

      // 🎨 canvas → imageData
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // 🌌 パーティクル生成
      const geometry = new THREE.BufferGeometry();
      const positions: number[] = [];
      const colors: number[] = [];
      const color = new THREE.Color();

      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          const index = (y * canvas.width + x) * 4;
          const r = imageData.data[index] / 255;
          const g = imageData.data[index + 1] / 255;
          const b = imageData.data[index + 2] / 255;
          const a = imageData.data[index + 3] / 255;

          if (a > 0.5) {
            positions.push(x - canvas.width / 2, -y + canvas.height / 2, 0);
            color.setRGB(r, g, b);
            colors.push(color.r, color.g, color.b);
          }
        }
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

      // ✨ 光ってる風のマテリアル
      const material = new THREE.PointsMaterial({
        size: 2.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // 🚀 アニメーション
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        points.rotation.y += 0.003; // 回転
        points.rotation.x += 0.001; // 少し傾き
        renderer.render(scene, camera);
      };
      animate();

      // 🧹 クリーンアップ
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
      };
    };

    init();

    return () => {
      if (renderer) renderer.dispose();
    };
  }, []);

  return <Wrapper ref={mountRef} />;
};

