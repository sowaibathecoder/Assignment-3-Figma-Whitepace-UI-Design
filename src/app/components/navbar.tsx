import Image from "next/image";
import whitepace from "/public/whitepace.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="
        w-[1919px]
        h-[92px] 
        absolute 
        left-[1px] 
        px-[220px] 
        py-[16px] 
        flex 
        justify-between 
        items-center
        gap-0 
        bg-[#043873] 
        "
      >
        {/* WHITEPACE IMAGE */}
        <div className="w-[191px] h-[34px] gap-0">
          <Image src={whitepace} alt="whitepace-logo" />
        </div>
        {/* LIST & BUTTON */}
        <div
          className=" 
            w-[737.5px]
            h-[60px] 
            flex 
            gap-[60px]
            justify-between 
            items-center
            "
        >
          {/* LIST DIV */}
          <div className="w-[549px] h-[25px] gap-[32px]">
            <ul
              className="
                  flex
                  w-[78px]
                  h-[23px]
                  gap-[30px]
                  text-white  
                  font-Inter
                  text-[18px] 
                  font-medium 
                  leading-[23px] 
                  "
            >
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          {/* BUTTON */}
          <button
            className="
                w-[126px] 
                h-[60px] 
                px-10 
                flex 
                gap-[10px] 
                py-4 
                rounded-lg 
                bg-[#FFE492]
                justify-center
                items-center
                "
          >
            <div
              className="
                    text-[18px]
                    font-medium
                    leading-[23px] 
                    tracking-[-0.02em] 
                    w-[46px] 
                    h-[23px] 
                    text-[#043873]
                    "
            >
              Login
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
