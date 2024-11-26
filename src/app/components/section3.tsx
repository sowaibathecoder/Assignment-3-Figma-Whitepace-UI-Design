import Image from "next/image";

export default function Section3() {
  return (
    <>
      <div
        className="
        absolute
        w-[1920px] 
        h-[759px] 
        px-[220px] 
        py-[140px] 
        gap-[98px]
        top-[2417px]
        flex
        bg-[#043873]
        "
      >
        <div className="w-[697px] h-[294px] gap-[60px] mt-[90px]">
          <div className="w-[697px h-[171px] gap-[24px]">
            <h1
              className="
              w-[697px] 
              h-[87px] 
              gap-[0px] 
              font-inter 
              text-[72px] 
              font-bold 
              leading-[87.14px] 
              tracking-[-0.02em]
              text-white 
              text-left
              "
            >
              Use as Extension
            </h1>
            <p
              className="
              w-[697px] 
              h-[60px] 
              gap-0 
              text-[18px] 
              font-normal 
              leading-[30px] 
              tracking-[-0.02em]
              text-white 
              text-left
              mt-[25px]
              "
            >
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages <br />
              or take screenshots as notes.
            </p>
          </div>
          <button
            className="
            w-[171px] 
            h-[63px] 
            px-[20px] 
            py-[20px] 
            gap-[10px] 
            rounded-md
            mt-[56px] 
            flex
            items-center
            justify-center
            text-white
            bg-[#4F9CF9]
            "
          >
            <p
              className="
              w-[67px] 
              h-[20px] 
              gap-0 
              text-[18px]
              font-medium 
              leading-[23px]
              tracking-[-0.02em] 
              text-left 
              text-white
              "
            >
              Let’s Go
            </p>
            <Image
              src={"/arrow.png"}
              alt={"arrow"}
              width={18}
              height={18}
              className="mt-[3px]"
            />
          </button>
        </div>
        <div className="w-[686px] h-[479px] gap-[4px] bg-[#C4DEFD]"></div>
      </div>
    </>
  );
}
