"use client";

import Link from "next/link";
import styled from "styled-components";
import org from "@/config/org/org.json";
import MergeIcon from "@/crops/elements/MergeIcon";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 3rem 2rem 2rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: auto;
`;

// 🟣 中央テキスト
const CenterText = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;

  &:hover {
    opacity: 0.85;
  }
`;

const BottomRight = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row; /* 常に横並び */
  margin-top: 2rem;
  gap: 0.5rem;

  .built-by {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    white-space: nowrap; /* 改行防止 */
  }

  svg {
    width: 32px;
    height: 32px;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 0.25rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* 🟢 中央 MergeLab テキスト */}
      <CenterText href={org.siteUrl} target="_blank" rel="noopener noreferrer">
        MergeLab
      </CenterText>

      {/* 📄 法規・連絡先・著作権 */}
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href="/terms">利用規約</Link> |{" "}
          <Link href="/privacy">プライバシー</Link> |{" "}
          <Link href="/legal">特定商取引法</Link>
        </p>
        <p>{org.email}</p>
        <p>{org.copyright}</p>
      </div>

      {/* 🟣 クレジット＋MergeIcon */}
      <BottomRight>
        <div className="built-by">
          <p>
            build with <strong>CodeyNode</strong>
          </p>
        </div>
        <MergeIcon />
      </BottomRight>
    </FooterWrapper>
  );
};

export default Footer;

