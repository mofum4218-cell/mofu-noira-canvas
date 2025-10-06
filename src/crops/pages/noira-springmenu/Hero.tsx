"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #9fcedf;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.nav`
  --duration: 0.5s;
  --easing: ease-in-out;
  position: relative;
  width: 220px;
  background: transparent;
  font-family: "Open Sans", sans-serif;

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: -4px 0 0 0;
  }

  a {
    display: block;
    text-decoration: none;
    background: #fff;
    transform-origin: 0 0;
    transition: transform var(--duration) var(--easing),
      color var(--duration) var(--easing);
    transition-delay: var(--delay-out);
    border-radius: 4px;
    padding: 1em 1.52em;
    color: #333;

    &:hover {
      background: #efefef;
    }
  }

  header {
    font-weight: 600;
    background: rgba(255, 255, 255, 0.5);
    transform-origin: 0 0;
    transition: transform var(--duration) var(--easing),
      color var(--duration) var(--easing);
    transition-delay: var(--delay-out);
    border-radius: 4px;
    padding: 1em 1.52em;
    position: relative;

    span {
      border: none;
      background: transparent;
      font-size: 1.5em;
      padding: 0;
      cursor: pointer;
      line-height: 1;
      float: right;
    }
  }

  footer button {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    padding: 1em;
    width: 100%;
    transform-origin: 0 0;
    transition: transform var(--duration) var(--easing);
    transition-delay: calc(
      var(--duration) + (0.1s * (var(--count) / 2))
    );
    cursor: pointer;
    outline: none;
    background: #cdcdcd;
    opacity: 0;
  }

  &.closed {
    a,
    header {
      transform: translateY(calc(var(--top) * -1))
        scaleY(0.1)
        scaleX(0.2);
      transition-delay: var(--delay-in);
      color: transparent;
    }

    footer button {
      transition-delay: 0s;
      transform: scaleY(0.7) scaleX(0.2);
    }
  }
`;

export const Hero: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const elements = menu.querySelectorAll("a, header");
    const count = elements.length;
    menu.style.setProperty("--count", count.toString());

    // グループ化
    const groupLength = Math.ceil(count / 3);
    let groupNumber = 0;
    let i = 1;

    elements.forEach((el, j) => {
      if (i > groupLength) {
        groupNumber++;
        i = 1;
      }
      (el as HTMLElement).dataset.group = groupNumber.toString();
      i++;
    });

    // トグルボタン
    const button = menu.querySelector("footer button");
    if (!button) return;

    const handleClick = (e: Event) => {
      e.preventDefault();
      elements.forEach((el, j) => {
        const rect = el.getBoundingClientRect();
        const group = Number((el as HTMLElement).dataset.group || "0");
        (el as HTMLElement).style.setProperty(
          "--top",
          rect.top + group * -15 - 20 + "px"
        );
        (el as HTMLElement).style.setProperty(
          "--delay-in",
          j * 0.1 + "s"
        );
        (el as HTMLElement).style.setProperty(
          "--delay-out",
          (count - j) * 0.1 + "s"
        );
      });
      menu.classList.toggle("closed");
      e.stopPropagation();
    };

    button.addEventListener("click", handleClick);

    // 初回デモ用
    setTimeout(() => {
      button.click();
      setTimeout(() => {
        button.click();
      }, count * 100 + 500);
    }, 1000);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Wrapper>
      <Menu className="menu" ref={menuRef}>
        <header>
          Menu <span>×</span>
        </header>
        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ol>
        <footer>
          <button aria-label="Toggle Menu">Toggle</button>
        </footer>
      </Menu>
    </Wrapper>
  );
};

