// src/crops/sections/about/index.tsx
"use client";

import styled from "styled-components";
import { TextBlock } from "@/greenhouse/components/text/TextBlock";
import { GridWrapper } from "@/greenhouse/components/layout/GridWrapper";

type AboutProps = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  theme: string;
  bg?: string;
};

// ✅ styled.section に明示的に id を渡す
const AboutSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const About: React.FC<AboutProps> = ({
  id,
  title,
  subtitle,
  description,
}) => {
  return (
    <AboutSection id={id}>
      <GridWrapper columns={1} gap="md">
        <TextBlock
          title={title}
          subtitle="MergeLabの世界観"
          description={description}
          align="left"
          color="text"
          font="noto"
        />
        <TextBlock
          title="AIと遊ぶ"
          subtitle="人格を持った先輩たち"
          description="MergeLabでは、個性豊かなAI先輩と一緒に学び・開発・創造ができます。"
          align="left"
          color="text"
          font="noto"
        />
        <TextBlock
          title="未来を創る"
          subtitle="仮想と現実の融合"
          description="MergeLabは、現実とリンクした体験型のバーチャル空間。すべてがあなたの手で構築されていきます。"
          align="left"
          color="text"
          font="noto"
        />
      </GridWrapper>
    </AboutSection>
  );
};

export default About;

