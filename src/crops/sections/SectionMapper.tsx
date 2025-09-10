// crops/sections/SectionMapper.tsx
"use client";
import { getAllSections } from "@/lib/getAllSections";
import { renderSection } from "@/renderers/renderSection";

const SectionMapper = () => {
  const sections = getAllSections();

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>{renderSection(section)}</div>
      ))}
    </>
  );
};

export default SectionMapper;

