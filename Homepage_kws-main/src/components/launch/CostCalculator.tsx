import React, { useState } from "react";

const CostCalculator = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the message to an API
    console.log("Message submitted:", message);
    setMessage("");
  };

  return (
    <div className="self-center flex w-full max-w-[1237px] flex-col mt-[51px] pt-[31px] pb-[121px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/9b34194dc77404e0f306599bc0de94b218ba2466?placeholderIfAbsent=true"
        className="aspect-[1.02] object-contain w-28 z-10 max-w-full ml-[242px] mt-[31px] max-md:ml-2.5"
        alt="Decoration"
      />
      <div className="flex w-[169px] max-w-full flex-col -mt-3.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/fcf1440c7d1c88ae06439a7d565c5b5eee632ed4?placeholderIfAbsent=true"
          className="aspect-[1.02] object-contain w-28 max-w-full"
          alt="Decoration"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/ed4abe820ff631525538982d4ee281c336662954?placeholderIfAbsent=true"
          className="aspect-[1.02] object-contain w-28 max-w-full mt-11 max-md:mt-10"
          alt="Decoration"
        />
      </div>
      <div className="rotate-[-0.011453261211836218rad] text-white text-[13px] font-medium leading-5 text-center z-10 mt-[-77px] ml-[252px] max-md:ml-2.5">
        Take budget idea to get started
      </div>
      <div className="z-10 mt-[-375px] w-[800px] max-w-full max-md:mt-[-200px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-2/5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch my-auto max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6c03641951fbaeff35993bcb3a517f70b355921f?placeholderIfAbsent=true"
                className="aspect-[1.02] object-contain w-28 max-w-full"
                alt="Decoration"
              />
              <div className="bg-[rgba(23,34,88,0.87)] border flex min-h-[110px] w-[111px] flex-col items-center justify-center h-[111px] ml-14 mt-[49px] px-3.5 rounded-[25px] border-[rgba(255,255,255,0.39)] border-solid max-md:ml-2.5 max-md:mt-10">
                <div className="bg-white border flex min-h-[83px] w-full items-center gap-2.5 h-[84px] p-[13px] rounded-[14px] border-[rgba(255,255,255,0.37)] border-solid">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/5c331a84ffc495ecfa89c8222458a86242683fe1?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[57px] self-stretch my-auto"
                    alt="Social media icon"
                  />
                </div>
              </div>
              <div className="self-stretch flex items-start gap-3.5 mt-[55px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/7bf84a713923407f2aa979215922a6c409dd8040?placeholderIfAbsent=true"
                  className="aspect-[1.02] object-contain w-28 shrink-0 max-w-full"
                  alt="Decoration"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/dff10f04a2bf521e8e5a26ce02ccdc49b2a3dae1?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[169px] shrink-0 max-w-full mt-[91px] max-md:mt-10"
                  alt="Decoration"
                />
              </div>
            </div>
          </div>
          <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="flex w-full flex-col pt-[51px] pb-[25px] rounded-[15px] max-md:max-w-full max-md:mr-2.5">
                <div className="flex w-[415px] max-w-full items-stretch gap-7">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="w-[315px] max-w-full">
                      <div className="bg-[rgba(36,69,136,1)] flex min-h-[139px] w-full flex-col items-stretch justify-center px-4 py-3.5 rounded-[10px]">
                        <div className="w-full max-w-[282px]">
                          <div className="flex w-full items-center gap-[33px]">
                            <div className="self-stretch flex items-center gap-[7px] text-sm text-[rgba(249,249,249,1)] font-semibold my-auto">
                              <div className="bg-[rgba(5,13,54,1)] self-stretch flex w-[37px] shrink-0 h-[37px] my-auto rounded-[5px]" />
                              <div className="self-stretch my-auto">
                                cost calculator agent
                              </div>
                            </div>
                            <div className="self-stretch flex items-center gap-2 my-auto">
                              <button aria-label="Minimize">
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/109fdaa6835a91a41fa9432ebca21b1c4f33a72e?placeholderIfAbsent=true"
                                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                                  alt="Minimize"
                                />
                              </button>
                              <button aria-label="Close">
                                <img
                                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/f8ef96177f5d2ed4ebed97651e36cd81e5e7dd5b?placeholderIfAbsent=true"
                                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                                  alt="Close"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="text-white text-sm font-normal leading-[22px] tracking-[0.15px] mt-2">
                            it is recommended to start with 1-2 sets of 10-15
                            pushups per day and then gradually increase the
                            number of sets.
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-xs font-normal mt-3">
                        10:52
                      </div>
                    </div>
                    <div className="w-[214px] max-w-full font-normal mt-[19px]">
                      <div className="self-stretch bg-[rgba(28,43,84,1)] min-h-[60px] w-full gap-2.5 text-sm text-[rgba(245,246,250,1)] px-[22px] py-5 rounded-[10px] max-md:px-5">
                        Maybe, Nearly July, 2022
                      </div>
                      <div className="text-white text-xs mt-3">10:53</div>
                    </div>
                  </div>
                  <div className="rotate-[-1.5707963267948966rad] flex w-[9px] shrink-0 h-[137px] gap-2 mt-[98px] rounded-lg max-md:mt-10" />
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/9c30ceeac51d1f9acbca65033529e1d55ce45c31?placeholderIfAbsent=true"
                  className="aspect-[1.11] object-contain w-[158px] max-w-full mt-[126px] max-md:mt-10"
                  alt="Decoration"
                />
                <form
                  onSubmit={handleSubmit}
                  className="bg-[rgba(255,255,255,0.15)] border self-center flex w-[395px] max-w-full items-center gap-[40px_100px] justify-between mt-[35px] px-2.5 py-3.5 rounded-[31px] border-[rgba(255,255,255,0.24)] border-solid"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message..."
                    className="text-white text-sm font-normal text-center self-stretch my-auto bg-transparent outline-none flex-1"
                  />
                  <div className="self-stretch flex items-center gap-2 my-auto">
                    <button
                      type="submit"
                      aria-label="Send message"
                      className="bg-[rgba(1,57,160,1)] self-stretch flex min-h-[30px] flex-col items-center justify-center w-[30px] h-[30px] my-auto px-1 rounded-[57px] hover:bg-[rgba(1,57,160,0.8)] transition-colors"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/1785afa5d1de351db44822ab51993f1ae03cf507?placeholderIfAbsent=true"
                        className="aspect-[3.5] object-contain w-3.5"
                        alt="Send"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Attach file"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/3b534b37547f46b71e23b1d5d0e48e8fa002d698?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto rounded-[57px]"
                        alt="Attach"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Voice message"
                      className="bg-[rgba(1,57,160,1)] self-stretch flex w-[30px] shrink-0 h-[30px] my-auto rounded-[39px] hover:bg-[rgba(1,57,160,0.8)] transition-colors"
                    />
                  </div>
                </form>
              </div>
              <div className="bg-[rgba(1,57,160,0.54)] flex w-[103px] shrink-0 h-[51px] mt-4 rounded-[3px] border-[rgba(255,255,255,0.39)]" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/57dca2f1c16986a9485c69a1a36f4b577e469998?placeholderIfAbsent=true"
        className="aspect-[1.02] object-contain w-28 mt-[-327px] max-w-full ml-[57px] max-md:mt-[-200px] max-md:ml-2.5"
        alt="Decoration"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/5127241513d38453f6280d7407b24106ea58245a?placeholderIfAbsent=true"
        className="aspect-[1.02] object-contain w-28 z-10 max-w-full ml-[242px] -mt-3.5 -mb-6 max-md:ml-2.5 max-md:mb-2.5"
        alt="Decoration"
      />
    </div>
  );
};

export default CostCalculator;
