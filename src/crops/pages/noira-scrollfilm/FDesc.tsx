"use client";
import styled from "styled-components";

const DescWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;
  font-size: 1.1rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #222;
  }

  p {
    color: #444;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const FDesc: React.FC = () => {
  return (
    <DescWrapper>
      <h3>Winter Reverberation</h3>
      <p>
        As the final snow drifts through the silent air,  
        the warmth beneath begins to stir once more.  
        What was frozen starts to breathe again,  
        whispering that every stillness is only the prelude to movement.  
        In MergeLab’s world, even silence has its rhythm.  
      </p>
    </DescWrapper>
  );
};

