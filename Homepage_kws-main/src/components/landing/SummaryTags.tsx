import React from "react";

interface SummaryTagsProps {
  tags: string[];
}

export const SummaryTags: React.FC<SummaryTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-[rgba(145,59,255,0.3)] text-white text-lg px-5 py-2 rounded-[27px]"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
