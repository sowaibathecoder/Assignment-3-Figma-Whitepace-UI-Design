import Image from "next/image";

export default function Section4() {
  return (
    <>
      {/* Main-Div */}
      <div
        className="
        absolute
        w-[1920px] 
        h-[759px] 
        px-[220px] 
        py-[140px] 
        gap-[98px]
        top-[3176px]
        flex
        bg-white
        "
      >
        {/* Sub-Div-1 */}
        <div className="w-[686px] h-[479px] gap-[4px] bg-[#C4DEFD]"></div>
        {/* Sub-Div-2 */}
        <div className="w-[669px] h-[411px] gap-[60px] mt-[90px]">
          <div className="w-[669px h-[288px] gap-[24px]">
            <h1
              className="
              w-[669px] 
              h-[174px] 
              gap-[0px] 
              text-[72px] 
              font-bold 
              leading-[87.14px] 
              tracking-[-0.02em]
              text-black
              text-left
              "
            >
              Customise it to <br /> your needs
            </h1>
            <p
              className="
              w-[669px]
              h-[90px] 
              gap-0 
              text-[18px] 
              font-normal 
              leading-[30px] 
              tracking-[-0.02em] 
              text-left
              text-black
              mt-[25px]
              "
            >
              Customise the app with plugins, custom themes and multiple text
              editors (Rich <br /> Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
          </div>
          <button
            className="
            w-[171px] 
            h-[63px] 
            px-[40px] 
            py-[20px] 
            gap-[10px] 
            rounded-md
            mt-[56px] 
            flex
            bg-[#4F9CF9]
            "
          >
            <p
              className="
              w-[67px] 
              h-[23px] 
              gap-0 
              text-[16px] {/*18px*/}
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
              width={20}
              height={20}
              className="mt-[3px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
