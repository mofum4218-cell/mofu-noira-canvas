"use client";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const PlayButton = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
  position: relative;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 35px solid black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  color: #000;
  font-weight: bold;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const ThreeContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2; /* 背景の上、ボタンより下 */
`;

export const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [bgUrl, setBgUrl] = useState("");
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // 背景画像ロード
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/star.jpg", 600);
      if (data?.signedUrl) setBgUrl(data.signedUrl);
    };
    load();
  }, []);

  // 星空three.js初期化
  useEffect(() => {
    if (!visible || !mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [visible]);

  return (
    <Wrapper>
      {/* 背景画像は常に表示 */}
      {bgUrl && <BackgroundImage src={bgUrl} alt="background" />}

      {!visible && (
        <PlayButton onClick={() => setVisible(true)}>
          <Triangle />
        </PlayButton>
      )}

      {visible && (
        <>
          <ThreeContainer ref={mountRef} />
          <CloseButton onClick={() => setVisible(false)}>✕ Close</CloseButton>
        </>
      )}
    </Wrapper>
  );
};

