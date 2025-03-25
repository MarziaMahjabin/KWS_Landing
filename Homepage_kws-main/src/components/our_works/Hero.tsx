import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full h-[626px] bg-[#06103C]">
        <svg
          width="1439"
          height="623"
          viewBox="0 0 1439 623"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[626px]"
        >
          <rect y="-3" width="1439" height="626" fill="#06103C"></rect>
          <rect
            x="826"
            y="151"
            width="170"
            height="170"
            fill="url(#pattern0_hero)"
            fillOpacity="0.15"
          ></rect>
          <path
            d="M395.5 183L402.808 195.273L417 198.279L407.325 208.87L408.788 223L395.5 217.273L382.212 223L383.675 208.87L374 198.279L388.192 195.273L395.5 183Z"
            fill="#913BFF"
          ></path>
          <path
            d="M625 352L631.798 363.352L645 366.133L636 375.929L637.361 389L625 383.702L612.639 389L614 375.929L605 366.133L618.202 363.352L625 352Z"
            fill="#337BFF"
          ></path>
          <path
            d="M873 470L877.759 477.67L887 479.549L880.7 486.168L881.652 495L873 491.421L864.348 495L865.3 486.168L859 479.549L868.241 477.67L873 470Z"
            fill="#202D6A"
          ></path>
          <defs>
            <pattern
              id="pattern0_hero"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_hero"
                transform="translate(-0.235437) scale(0.00242718)"
              ></use>
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col items-start gap-[13px] absolute bottom-[100px] px-[100px] max-sm:px-5">
        <h1 className="text-[#F9F9F9] text-[44px] font-bold max-sm:text-4xl">
          our works
        </h1>
        <nav aria-label="Breadcrumb" className="text-lg font-medium leading-5">
          <Link to="/" className="text-white">
            Home
          </Link>
          <span className="text-white"> - </span>
          <Link to="/project" className="text-white">
            project
          </Link>
          <span className="text-white"> - </span>
          <span className="text-[#913BFF]">our works</span>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
