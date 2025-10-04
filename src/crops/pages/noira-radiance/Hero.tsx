"use client";

import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import anime from "animejs";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #000;
`;

const CanvasContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const TextLayer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 8% 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #fff;

  @media (max-width: 768px) {
    padding: 15% 6%;
  }
`;

const scrollText = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: clamp(60px, 10vw, 140px);
  font-weight: 800;
  animation: ${scrollText} 20s linear infinite;
  color: rgba(255, 255, 255, 0.9);
  padding-right: 4rem;
  margin-bottom: 4rem;
`;

const Section = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;
  gap: 3rem;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column !important; /* ← モバイルでは強制縦並び */
    gap: 2rem;
    margin: 3rem 0;
  }
`;

const Text = styled(motion.p)`
  flex: 1;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 400;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  @media (max-width: 900px) {
    order: 2; /* 画像の下に来るように */
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 50%;
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.5s ease;
  cursor: pointer;
  background: #111;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 30px rgba(255, 220, 180, 0.25),
      0 0 60px rgba(255, 220, 180, 0.15);
  }

  @media (max-width: 900px) {
    max-width: 100%;
    box-shadow: none;
    order: 1; /* 上にくる */
  }
`;

const ImageBox = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
  filter: brightness(0.85);
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.55);
  padding: 1rem 1.5rem;
  text-align: right;
  font-size: clamp(12px, 1.5vw, 14px);
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #fff;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
`;

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = canvasRef.current;
    if (!mount) return;

    // === 背景 ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const texLoader = new THREE.TextureLoader();
    const texture = texLoader.load("/sample/showcase1.jpg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const planeGeo = new THREE.PlaneGeometry(20, 12);
    const planeMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 1.0,
      metalness: 0.0,
      opacity: 0.3,
      transparent: true,
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.position.set(0, 0, -10);
    scene.add(plane);

    const light = new THREE.PointLight(0xffffff, 1.0, 20);
    light.position.set(0, 0, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    anime({
      targets: light,
      intensity: [0.5, 1.4],
      duration: 6000,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });

    const animateLoop = () => {
      requestAnimationFrame(animateLoop);
      texture.offset.x += 0.00015;
      texture.offset.y += 0.0001;
      plane.rotation.z += 0.0004;
      renderer.render(scene, camera);
    };
    animateLoop();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const sections = [
    { src: "/sample/showcase1.jpg", reverse: false },
    { src: "/sample/showcase2.jpg", reverse: true },
    { src: "/sample/showcase3.jpg", reverse: false },
    { src: "/sample/showcase4.jpg", reverse: true },
  ];

  return (
    <Wrapper>
      <CanvasContainer ref={canvasRef} />
      <TextLayer>
        <TitleWrapper>
          <TitleText>
            Radiance of the Modern Light — The Infinite Flow of Time —
          </TitleText>
          <TitleText>
            Radiance of the Modern Light — The Infinite Flow of Time —
          </TitleText>
        </TitleWrapper>

        {sections.map((item, i) => (
          <Section key={i} reverse={item.reverse}>
            <ImageWrapper>
              <ImageBox
                src={item.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
              <Overlay>VIEW&nbsp;MORE&nbsp;&gt;</Overlay>
            </ImageWrapper>

            <Text
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              In the vast depth of silence, a reflection emerges — subtle,
              shifting, and endlessly layered. The surface breathes with dim
              light, like distant echoes of creation itself. Each fragment of
              brilliance becomes a reminder of design’s quiet power to shape
              perception and presence. Through metallic tones and glassy edges,
              LUX embodies the intersection between technology and artistry.
              Its existence is less an object and more a rhythm, a motion
              suspended between what shines and what remains unseen.
            </Text>
          </Section>
        ))}
      </TextLayer>
    </Wrapper>
  );
};

