export const Hero = () => {
  return (
    <header className="flex flex-col relative min-h-[628px] w-full pt-[45px] pb-[130px] px-[54px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/165aac82c429e58a36ed2d7b03bc14f8b154fa75?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />

      <div className="relative flex mb-[-26px] w-[638px] max-w-full flex-col items-stretch justify-center ml-[25px] mt-[196px] max-md:mt-10 max-md:mb-2.5">
        <h1 className="text-white text-[100px] font-bold leading-none max-md:max-w-full max-md:text-[40px]">
          about us
        </h1>
        <p className="text-[rgba(249,249,249,1)] text-[22px] font-medium mt-[51px] max-md:max-w-full max-md:mt-10">
          We are committed to delivering exceptional software solutions that
          drive innovation and success.
        </p>
      </div>
    </header>
  );
};
