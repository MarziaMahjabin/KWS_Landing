import ProjectCard from "../ui/ProjectCard";
import ResearchBuddyLogo from "../../assets/images/research-buddy.svg";
import NFTClosetLogo from "../../assets/images/nft-closet.svg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Research Buddy",
      description:
        "A collaborative platform for researchers to connect, share projects, and foster groundbreaking discoveries through a seamless interface.",
      logo: (
        <img
          src={ResearchBuddyLogo}
          alt="Research Buddy Logo"
          className="w-[90px]"
        />
      ),
    },
    {
      id: 2,
      title: "NFT Closet X",
      description:
        "A pioneering NFT marketplace where fashion meets blockchain, allowing users to mint, trade, and explore digital fashion collections.",
      logo: (
        <img
          src={NFTClosetLogo}
          alt="NFT Closet X Logo"
          className="w-[80px]"
        />
      ),
    },
    {
      id: 3,
      title: "DATAM",
      description:
        "A cutting-edge data analysis and management tool designed to empower businesses with actionable insights and efficient workflows.",
      logo: (
        <div className="text-[#050D36] text-[28px] font-bold">
          DATAM
        </div>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 px-[70px] py-[100px] max-md:px-10 max-sm:px-5" style={{background: "#0B0F2F"}}>
      <div className="flex flex-col items-center gap-[17px] max-w-[783px] text-center">
        <h2 className="text-[#F9F9F9] text-[38px] font-bold max-sm:text-[32px]">
          Our Startup Projects
        </h2>
        <p className="text-[#969696] text-[22px] max-sm:text-lg">
          Explore Our Portfolio Of Innovative Projects That Highlight The Depth Of
          Our Expertise Across Various Domains. From Web Security To
          Cutting-Edge IT Solutions, KWS Technology Delivers Excellence In Every Project.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            logo={project.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
