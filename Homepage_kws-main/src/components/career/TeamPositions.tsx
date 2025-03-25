import React from "react";
import JobCard from "../ui/JobCard";

const TeamPositions: React.FC = () => {
  const jobPositions = [
    {
      title: "Web Developer",
      description:
        "Join our web development team to build modern, responsive websites and web applications using the latest technologies and frameworks.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe6abf6709308511a3c59f6c20fcaff3f35b67cf",
      imageAlt: "Web Developer",
    },
    {
      title: "AI/ML Engineer",
      description:
        "Design, develop and implement artificial intelligence and machine learning solutions that solve complex problems and drive innovation.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e343aa461be72a9e628bc3a1871f7e60b68c90e1",
      imageAlt: "AI/ML Engineer",
    },
    {
      title: "Creative and Design",
      description:
        "Create visually stunning designs and user interfaces that elevate digital experiences and strengthen brand identity.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b522cf6836c3cf145d837c2837b0f13cda00e00a",
      imageAlt: "Creative and Design",
    },
    {
      title: "Blockchain Developer",
      description:
        "Develop decentralized applications and smart contracts using blockchain technology to enable secure and transparent solutions.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b3421ddccfd0834fc46838f68497323c974b0cde",
      imageAlt: "Blockchain Developer",
    },
    {
      title: "Marketing & SEO",
      description:
        "Drive growth and visibility through innovative digital marketing strategies and search engine optimization techniques.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1c29dc15b44edbbbe06cd7373fe11da6a74e7bfe",
      imageAlt: "Marketing & SEO",
    },
    {
      title: "Project Management",
      description:
        "Lead teams and oversee project execution from concept to completion, ensuring timely delivery and exceptional quality.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/395b2a9f0167f4e2b5bd02f0b639a95baaad7e6a",
      imageAlt: "Project Management",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 px-[70px] py-[100px] max-md:px-10 max-sm:px-5" style={{background: "#0B0F2F"}}>
      <div className="flex flex-col items-center gap-[17px] max-w-[783px] text-center">
        <h2 className="text-[#F9F9F9] text-[38px] font-bold max-sm:text-[32px]">
          Be a Part of Something Big at KWS!
        </h2>
        <p className="text-[#969696] text-[22px] max-sm:text-lg">
          At KWS, we're more than a tech company—we're a hub of innovation,
          creativity, and limitless possibilities. If you're driven by passion,
          eager to push boundaries, and ready to make an impact, you belong with
          us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {jobPositions.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
            imageSrc={job.imageSrc}
            imageAlt={job.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPositions;
