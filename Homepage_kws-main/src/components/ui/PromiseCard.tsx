interface PromiseCardProps {
  title: string;
  description: string;
}

export const PromiseCard = ({ title, description }: PromiseCardProps) => {
  return (
    <div className="bg-[rgba(132,35,255,0.08)] shadow-[0px_0px_32px_7px_rgba(255,255,255,0.05)] self-stretch flex min-h-[226px] w-full flex-col items-center justify-center px-9 py-[59px] rounded-[19px] border-[rgba(145,59,255,1)] border-solid border-2 max-md:px-5">
      <div className="flex items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <h3 className="text-[rgba(249,249,249,1)] text-[40px] font-bold self-stretch my-auto">
          {title}
        </h3>
        <div
          className="text-[rgba(182,182,182,1)] text-[22px] font-medium self-stretch w-[627px] my-auto max-md:max-w-full"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
