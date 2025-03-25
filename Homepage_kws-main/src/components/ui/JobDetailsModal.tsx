import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./button";

interface JobDetailsModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  title,
  isOpen,
  onClose,
}) => {
  // Job details based on position title
  const getJobDetails = (jobTitle: string) => {
    // This could be expanded with more detailed information
    const details = {
      "Web Developer": {
        responsibilities: [
          "Build and maintain responsive websites and web applications",
          "Collaborate with designers to implement UI/UX designs",
          "Optimize applications for maximum speed and scalability",
          "Ensure cross-browser compatibility and responsive design"
        ],
        requirements: [
          "Proficient in HTML, CSS, JavaScript, and modern frameworks",
          "Experience with responsive design and mobile-first approaches",
          "Understanding of server-side CSS pre-processors",
          "Excellent problem-solving skills and attention to detail"
        ]
      },
      "AI/ML Engineer": {
        responsibilities: [
          "Develop machine learning models and algorithms",
          "Process and analyze large datasets",
          "Collaborate with product teams to implement AI solutions",
          "Optimize existing machine learning models"
        ],
        requirements: [
          "Strong background in mathematics, statistics, and computer science",
          "Experience with machine learning frameworks like TensorFlow or PyTorch",
          "Proficiency in programming languages like Python or R",
          "Ability to translate business problems into technical solutions"
        ]
      },
      "Creative and Design": {
        responsibilities: [
          "Create visual concepts and designs for digital products",
          "Develop UI components and design systems",
          "Collaborate with developers to implement designs",
          "Create brand assets and marketing materials"
        ],
        requirements: [
          "Proficiency in design software like Figma, Adobe XD, Photoshop",
          "Strong understanding of UI/UX principles",
          "Experience with responsive design and accessibility",
          "Excellent visual communication skills"
        ]
      },
      "Blockchain Developer": {
        responsibilities: [
          "Design and implement blockchain protocols and architectures",
          "Develop smart contracts and decentralized applications",
          "Ensure security of blockchain implementations",
          "Optimize performance of blockchain systems"
        ],
        requirements: [
          "Experience with blockchain platforms like Ethereum, Solana, or Polkadot",
          "Proficiency in programming languages like Solidity, Rust, or JavaScript",
          "Understanding of cryptography and security principles",
          "Knowledge of distributed systems and consensus algorithms"
        ]
      },
      "Marketing & SEO": {
        responsibilities: [
          "Develop and implement digital marketing strategies",
          "Manage SEO campaigns and optimize website content",
          "Analyze marketing metrics and generate reports",
          "Collaborate with content creators and designers"
        ],
        requirements: [
          "Experience with SEO tools and techniques",
          "Understanding of search engine algorithms and ranking factors",
          "Knowledge of digital marketing channels and tactics",
          "Strong analytical and problem-solving skills"
        ]
      },
      "Project Management": {
        responsibilities: [
          "Lead project planning and execution from concept to completion",
          "Coordinate team activities and ensure timely delivery",
          "Manage project scope, budget, and resources",
          "Communicate with stakeholders and report project progress"
        ],
        requirements: [
          "Experience with project management methodologies (Agile, Scrum, etc.)",
          "Strong leadership and communication skills",
          "Ability to manage multiple projects simultaneously",
          "Problem-solving and risk management capabilities"
        ]
      }
    };
    
    // Return details for the specific job title or default message
    return details[jobTitle as keyof typeof details] || {
      responsibilities: ["Details will be provided during the application process."],
      requirements: ["Please apply for more information."]
    };
  };

  const jobDetails = getJobDetails(title);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-[#0B174B] text-white border border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {title} - Job Details
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Learn more about this position before applying.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#913BFF] mb-2">Key Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1 text-white">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#913BFF] mb-2">Requirements</h3>
            <ul className="list-disc pl-5 space-y-1 text-white">
              {jobDetails.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 flex justify-between">
            <a 
              href="https://forms.gle/yWyN3yhzKC7wyPq27"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#913BFF] hover:bg-[#7B32D6] text-white px-4 py-2 rounded-md"
            >
              Apply Now
            </a>
            <DialogClose asChild>
              <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal; 