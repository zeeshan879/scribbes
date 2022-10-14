import React from "react";
import Image from "next/image";
import loginBanner from "../../Asstes/Images/loginBanner.png";
import google from "../../Asstes/Images/google.png";
import fb from "../../Asstes/Images/fb.png";
import apple from "../../Asstes/Images/apple.png";

const Login = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <Image src={loginBanner}  />
        </div>
        <div className="w-[1042px]   pt-[100px]  flex justify-center">
          <div className="w-[472px] pb-[118px]">
            <div className="text-[42px] font-bold text-black">Login</div>
            <div className="pt-[54px]">
              <div className="text-black font-medium text-[20px]">
                Email<sup className="text-[#000580]">*</sup>
              </div>
              <div className="border-[2px] border-[#BCBCBC] h-[63px] w-full mt-[7px] rounded-[41px]">
                <input
                  placeholder="email@website.com"
                  className="h-full rounded-[41px] w-[90%] pl-[35px] border-none outline-none text-[#BCBCBC]"
                />
              </div>
              <div className="text-black font-medium text-[20px] mt-[21px]">
                Password<sup className="text-[#000580]">*</sup>
              </div>
              <div className="border-[2px] border-[#BCBCBC] h-[63px] w-full mt-[7px] rounded-[41px]">
                <input
                  placeholder="Password"
                  className="h-full rounded-[41px] w-[90%] pl-[35px] border-none outline-none text-[#BCBCBC]"
                />
                <div className="flex justify-between items-center mt-[31px]">
                  <div className="flex gap-[11px] items-center text-[16px] font-medium">
                    <input
                      type="checkbox"
                      class="accent-[#1CAC19] rounded-[6px] h-[20px] w-[20px]"
                      checked
                    />{" "}
                    Remember me
                  </div>
                  <div className="text-[18px] font-medium text-[#1CAC19] cursor-pointer">
                    Forget Password?
                  </div>
                </div>
                <div className="h-[63px] w-full mt-[31px] rounded-[41px] bg-[#1CAC19] flex justify-center items-center cursor-pointer text-white text-[20px] font-bold">
                  Login
                </div>

                <div className="flex justify-between items-center mt-[29px]">
                  <div className="border-[2px] border-[#BCBCBC] w-[205px]"></div>
                  <div className="text-[#BCBCBC] text-[16px]">or</div>
                  <div className="border-[2px] border-[#BCBCBC] w-[205px]"></div>
                </div>
                <div className="mt-[57px] flex justify-evenly items-center">
                  <div className="flex justify-center items-center h-[60px] w-[60px] rounded-[41px] shadow-social cursor-pointer">
                    <Image src={google} />
                  </div>
                  <div className="flex justify-center items-center h-[60px] w-[60px] rounded-[41px] shadow-social cursor-pointer">
                    <Image src={fb} />
                  </div>
                  <div className="flex justify-center items-center h-[60px] w-[60px] rounded-[41px] shadow-social cursor-pointer">
                    <Image src={apple} />
                  </div>
                </div>
                <div className="flex mt-[71px] justify-center items-center text-[20px] font-bold cursor-pointer">
                  Not a member?&nbsp;{" "}
                  <span className="text-[#1CAC19]"> Sign up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
