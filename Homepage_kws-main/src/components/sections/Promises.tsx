import { PromiseCard } from "@/components/ui/PromiseCard";

export const Promises = () => {
  const promises = [
    {
      title: "Modern UI/UX Designs",
      description:
        'Our design philosophy focuses on crafting visually appealing, user-friendly, and interactive interfaces that provide a <span class="text-[rgba(145,59,255,1)]">seamless experience</span> across all platforms.',
    },
    {
      title: "security",
      description:
        'We implement the latest security measures <span class="text-[rgba(145,59,255,1)]">to safeguard your data</span>, ensuring robust protection against cyber threats while maintaining compliance with industry standards.',
    },
    {
      title: "transparency",
      description:
        'At KWS, we believe in <span class="text-[rgba(145,59,255,1)]">clear communication</span> and trust. From project inception to completion, we maintain an <span class="text-[rgba(145,59,255,1)]">open dialogue</span> with our clients, ensuring <span class="text-[rgba(145,59,255,1)]">honest collaboration</span> and shared success.',
    },
  ];

  return (
    <section className="self-center flex w-full max-w-[1230px] flex-col max-md:max-w-full px-4">
      <div className="bg-[rgba(132,35,255,0.15)] border min-h-[50px] w-[180px] max-w-full text-[22px] text-[rgba(249,249,249,1)] font-semibold mt-[74px] px-[13px] py-3 rounded-[10px] border-[rgba(145,59,255,1)] border-solid max-md:mt-10">
        our promise
      </div>

      <h2 className="text-white text-[62px] font-bold mt-[53px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        We always promise our clients
      </h2>

      <div className="flex flex-col gap-[34px] mt-[73px] max-md:mt-10">
        {promises.map((promise, index) => (
          <PromiseCard
            key={index}
            title={promise.title}
            description={promise.description}
          />
        ))}
      </div>
    </section>
  );
};
