import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-[1920px] h-[461px] absolute top-[5047px] px-[220px] pt-[140px] pb-[32px] gap-[200px] bg-[#043873]">
        <div className="w-[1480px] h-[289px] gap-[100px]">
          <div className="w-[1480px] h-[169px] gap-[100px] flex">
            <div className="w-[295px] h-[169px] gap[15px]">
              <Image
                src={"/whitepace.png"}
                alt={"whitepace-logo"}
                width={191}
                height={34}
              />
              <p className="w-[240px] h-[120px] gap-0 text-[18px] font-normal leading-[30px] tracking-[-0.02em] mt-[8px] text-white text-left">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <div className="w-[295px] h-[127px] gap[15px]">
              <p className="w-[70px] h-[22px] gap-0 text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-white text-left">
                Product
              </p>
              <ul className="w-[150px] h-[104px] gap-0 text-left text-[16px] text-white font-normal leading-[37px] tracking-[-0.02em]">
                <li className="text-[#FFE492]">Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
            <div className="w-[295px] h-[130px] gap[15px]">
              <p className="w-[94px] h-[22px] gap-0 text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-white text-left">
                Resources
              </p>
              <ul className="w-[150px] h-[107px] gap-0 text-left text-[16px] text-white font-normal leading-[38px] tracking-[-0.02em]">
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li>Help center</li>
              </ul>
            </div>
            <div className="w-[295px] h-[130px] gap[15px]">
              <p className="w-[88px] h-[22px] gap-0 text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-white text-left">
                Company
              </p>
              <ul className="w-[150px] h-[107px] gap-0 text-left text-[16px] text-white font-normal leading-[38px] tracking-[-0.02em]">
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
              </ul>
            </div>
          </div>
          <div className="w-[1480px] h-0 border border-[#2E4E73] mt-[80px]"></div>
          <div className="w-[1480px] h-[20px] gap-0 flex justify-center items-center mt-[16px]">
            <p className="w-[172px] h-[20px] gap-0 text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-white">
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
