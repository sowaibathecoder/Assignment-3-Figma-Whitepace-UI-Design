import Image from "next/image";

export default function Section5() {
  return (
    <>
      <div className="w-[1920px] h-[574px] top-[3935px] px-[220px] py-[140px] gap-0 bg-[#043873] absolute">
        <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col justify-between items-center">
          <div className="w-[1064px] h-[171px] gap-[24px]">
            <h1 className="w-[1064px] h-[87px] gap-0 font-inter text-[72px] text-white text-center font-bold leading-[87.14px] tracking-[-0.02em]">
              Your work, everywhere you are
            </h1>
            <p className="w-[1064px] h-[60px] gap-0 text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center text-white mt-[12px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>

          {/* Button Section */}
          <button className="w-[195px] h-[63px] px-[20px] flex items-center justify-center bg-[#4F9CF9] gap-[10px] text-white rounded-lg">
            <span className="text-[18px] font-medium leading-none tracking-[-0.02em]">
              Try Taskey
            </span>
            <Image src={"/arrow.png"} alt={"arrow"} width={18} height={18} />
          </button>
        </div>
      </div>
    </>
  );
}
