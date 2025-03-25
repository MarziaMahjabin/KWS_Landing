export const ContactCTA = () => {
  return (
    <section className="bg-[rgba(11,23,75,1)] flex flex-col items-center justify-center mt-[228px] px-[70px] py-[71px] border-white max-md:max-w-full max-md:mr-[9px] max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1145px] items-start gap-[40px_49px] flex-wrap max-md:max-w-full">
        <div className="flex flex-col mt-[83px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/835ea945209ebe28a85f9dd87562f6a4abd6ffca?placeholderIfAbsent=true"
            alt="Decoration"
            className="aspect-[0.96] object-contain w-[89px] ml-2.5"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/738e9568eebe1dcb5ee5acbc2ad66cd07886c5d9?placeholderIfAbsent=true"
            alt="Decoration"
            className="aspect-[1.02] object-contain w-[85px] mt-[243px] max-md:mt-10"
          />
        </div>

        <div className="flex items-stretch flex-wrap grow shrink basis-auto max-md:max-w-full">
          <div className="grow shrink basis-auto max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[67%] max-md:w-full max-md:ml-0">
                <div className="z-10 mr-[-666px] text-6xl text-[rgba(249,249,249,1)] font-bold text-center mt-[119px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                  <div className="z-10 min-h-[269px] max-md:max-w-full max-md:text-[40px]">
                    <span className="capitalize">have</span> project in mind?
                    let's <br />
                    make it happen.
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f6ddb09439de8fa7f6106cbe23a6fc00a7281d0?placeholderIfAbsent=true"
                    alt="Decoration"
                    className="aspect-[1] object-contain w-[67px] ml-[82px] -mt-9 max-md:ml-2.5"
                  />
                </div>
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93027416321e2964a87464dd690d365c76009d8?placeholderIfAbsent=true"
                  alt="Contact Illustration"
                  className="aspect-[0.92] object-contain w-full grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[94px] max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ca21af8bf5eeed19a7c6cd0e51c0c558109531d?placeholderIfAbsent=true"
              alt="Decoration"
              className="aspect-[1] object-contain w-[71px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5724fe3cdf786022164924e78f509df3425b9f9e?placeholderIfAbsent=true"
              alt="Decoration"
              className="aspect-[0.99] object-contain w-[70px] mt-[233px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
