import Image from "next/image";
export default function Section6() {
  return (
    <>
      <div className="absolute w-[1920px] h-[538px] top-[4509px] py-[140px] px-[220px] gap-[100px]">
        <h1 className="w-[1482px] h-[87px] gap-0 text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-center">
          Our sponsors
        </h1>
        <div className="w-[1482px] h-[71px] gap-0 flex justify-between mt-[90px]">
          <Image
            src={"/apple.png"}
            alt={"apple-logo"}
            width={55.47}
            height={68}
            className="gap-[4px]"
          />
          <Image
            src={"/microsoft.png"}
            alt={"microsoft-logo"}
            width={287}
            height={62}
            className="gap-[0px]"
          />
          <Image
            src={"/slack.png"}
            alt={"slack-logo"}
            width={280}
            height={71}
            className="gap-[4px]"
          />
          <Image
            src={"/google.png"}
            alt={"google-logo"}
            width={211}
            height={69.81}
            className="gap-[4px]"
          />
        </div>
      </div>
    </>
  );
}

