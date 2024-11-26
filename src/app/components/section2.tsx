import Image from "next/image";

export default function Section2() {
  return (
    <>
      {/* Main Div */}
      <div
        className="
      absolute 
      w-[1920px] 
      h-[1588px] 
      py-[140px] 
      px-[220px] 
      gap-[100px]
      "
      >
        {/* Sub-Div-1 */}
        <div className="w-[1480px] h-[547px] gap-[60px] flex">
          <div className="w-[672px] h-[411px] gap-[60px] mt-[65px]">
            <div className="w-[672px] h-[288px] gap-[24px]">
              <h1
                className="
              w-[672px] 
              h-[174px] 
              text-[72px] 
              font-bold 
              leading-[87.14px] 
              tracking-[-0.02em] 
              text-left 
              font-sans
              "
              >
                Project Management
              </h1>
              <p
                className="
              w-[672px] 
              h-[90px] 
              text-[18px] 
              font-normal
              leading-[30px] 
              tracking-[-0.02em] 
              text-left 
              font-Inter
              mt-[20px]
              "
              >
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them <br /> to a note.
              </p>
            </div>
            <button
              className="
            w-[201px]
            h-[63px]
            px-[40px] 
            gap-[10px] 
						flex 
						items-center
            justify-center 
						rounded-lg 
						bg-[#4F9CF9]
						mt-[58px]
						"
            >
              <p
                className="
                font-Inter 
                w-[159px]
                h-[23px]
                text-[18px] 
                font-medium 
                leading-[23px]  {/*23px*/}
                tracking-[-0.02em] 
                text-left 
								text-white
								justify-center
								items-center
								flex
								"
              >
                Get Started
              </p>
              <Image src={"/arrow.png"} alt={"arrow"} width={28} height={28} />
            </button>
          </div>
          <div className="w-[748px] h-[544px] gap-[0px] bg-[#C4DEFD]"></div>
        </div>

        {/* Sub-Div-2*/}
        <div className="w-[1480px] h-[661px] gap-[100px] mt-[100px] flex">
          <div className="w-[710px] h-[661px] gap-[0px]">
            <Image
              src={"/circles.png"}
              alt={"circles-diagram"}
              height={800}
              width={800}
            />
          </div>
          <div className="w-[670px] h-[294px] gap-[60px] mt-[180px]">
            <div className="w-[670px] h-[171px] gap-[24px]">
              <h1
                className="
              w-[670px] 
              h-[87px] 
              text-[72px] 
              font-bold 
              leading-[87.14px] 
              tracking-[-0.02em] 
              text-left 
              font-sans
              "
              >
                Work together
              </h1>
              <p
                className="
              w-[670px] 
              h-[60px] 
              text-[18px] 
              font-normal 
              leading-[30px] 
              tracking-[-0.02em] 
              text-left 
              font-Inter
              mt-[20px]
              "
              >
                With whitepace, share your notes with your colleagues and
                collaborate on them. <br />
                You can also publish a note to the internet and share the URL
                with others.
              </p>
            </div>
            <button
              className="
            w-[186px] 
            h-[63px] 
            py-[20px] 
            gap-[10px] 
            bg-[#4F9CF9]
						flex 
						items-center
            justify-center 
						rounded-md 
						mt-[58px]
            "
            >
              <p
                className="
              w-[82px] 
              h-[23px] 
              text-[17.5px] 
              font-medium 
              leading-[23px] 
              tracking-[-0.02em] 
              text-left 
              text-white
              font-Inter 
              justify-center
              items-center
              flex
              "
              >
                Try it now
              </p>
              <Image src={"/arrow.png"} alt={"arrow"} width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
