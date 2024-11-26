import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div
        className="
			  bg-[#043873]
				text-white
				flex 
			  w-[1920px]
				h-[829px] 
				py-[140px] 
				px-[220px] 
				items-center
				"
      >
        <div className="w-[656px] h-[361px] gap-[60px] mt-[90px]">
          <div className="w-[656px] h-[238px] gap-[24px]">
            <h2
              className="
						  font-bold 
							font-Inter
							text-[64px] 
							leading-[77.45px] 
							tracking-[-0.02em] 
							mb-6 
							text-left 
							w-[656px] 
							h-[154px] 
							gap-0
							"
            >
              Get More Done with whitepace
            </h2>
            <p
              className="
						  font-normal
							text-lg 
							tracking-[-0.02em]
							w-[656px] 
							h-[60px] 
							gap-0 
							font-Inter 
							text-[18px] 
							text-left
							text-white
							"
            >
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <button
            className="
						flex 
						justify-center 
						items-center
					  w-[219px] 
						h-[63px] 
						gap-[10px]
						rounded-lg 
						bg-[#4F9CF9]
						mt-14
						"
          >
            <p
              className="
							  font-Inter 
								gap-[2px]
							  font-Inter 
								text-[17px] 
								font-medium 
								leading-[23px] 
								tracking-[-0.02em] 
								text-left 
								w-[159px] 
								h-[23px] 
								text-white
								flex
								justify-center
								items-center
								"
            >
              Try Whitepace free
            </p>
            <Image src={"/arrow.png"} alt={"arrow"} width={14} height={14} />
          </button>
        </div>
        <div className="w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD] mt-[90px]"></div>
      </div>
    </>
  );
};

export default HeroSection;

