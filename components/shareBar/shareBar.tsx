import Image from "next/image";

const ShareBar = () => {
  return (
    <div className=" absolute bottom-0  left-0 z-10 flex h-20 w-full items-center bg-very-dark-grayish-blue pl-8 md:left-1/2 md:-top-[20px] md:h-[55px] md:w-[248px] md:-translate-x-1/2 md:-translate-y-full md:rounded-[10px] md:drop-shadow-[0_10px_10px_rgba(201,213,225,0.5034)] ">
      <div className="flex gap-[21px]">
        <span className="text-[13px] leading-[20px] tracking-[5px] text-grayish-blue">
          SHARE
        </span>
        <div className="flex gap-4">
          <Image
            src="/images/icon-facebook.svg"
            alt="facebook"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/images/icon-pinterest.svg"
            alt="facebook"
            width={20}
            height={20}
          ></Image>
          <Image
            src="/images/icon-twitter.svg"
            alt="facebook"
            width={20}
            height={20}
          ></Image>
        </div>
      </div>
      <div className=" arrow-down absolute bottom-0 left-1/2 -translate-x-1/2  translate-y-full"></div>
    </div>
  );
};

export default ShareBar;
