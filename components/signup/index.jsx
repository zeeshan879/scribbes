import React from "react";
import Scribbes from "../../Asstes/Images/Scribbes.png";
import Image from "next/image";
import Head from "next/head";
import google from "../../Asstes/Images/google.png";
import fb from "../../Asstes/Images/fb.png";
import apple from "../../Asstes/Images/apple.png";
import Link from "next/link";
import * as yup from "yup";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { userSignUP } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
  };
  const UserValidateSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().required("Password is required*"),
    firstName: yup.string().required("This field required*"),
    lastName: yup.string().required("This field required"),
    userName: yup
      .string()
      .required("This field required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
      .min(5, "Usernames must be more than 4 characters"),
  });
  const handleSubmit = (value, { resetForm }) => {
    const signupData = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      userName: value.userName,
      password: value.password,
    };
    dispatch(userSignUP(signupData));
    router.push('/login');
  };
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/space-mono"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/space-grotesk"
          rel="stylesheet"
        ></link>
        <link href="http://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
      </Head>
      <div className="relative  w-full min-h-[100vh] bg-[#F8F8F8] px-[15px] sm:px-[0px]">
        <div className="pb-[30px] sm:pb-[50px] z-40">
          <div className="flex justify-center flex-col items-center ">
            <div className="pt-[30px] sm:pt-[53px] text-[#1CAC19] text-[32px]  sm:text-[42px] font-bold font-sans  leading-[52px]  sm:leading-[62px] tracking-[-0.085em]">
              <Link href="/"> Scribbes</Link>
            </div>
            <Formik
              initialValues={defaultValues}
              validationSchema={UserValidateSchema}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue, errors }) => (
                <Form className="z-10">
                  {console.log(
                    "first name error",
                    errors.firstName && errors.firstName
                  )}
                  <div className="w-full sm:w-[564px] mt-[20px] z-10  sm:mt-[39px]  shadow-signup pt-[20px] sm:pt-[35px] pb-[37px] px-[20px] sm:px-[45px] rounded-[37px] bg-white z-10">
                    <div className="flex justify-center text-[28px] sm:text-heading font-bold text-black font-grotesk">
                      Create a new account
                    </div>
                    <div className="mt-[15px] sm:mt-[21px]  flex justify-evenly items-center">
                      <div className="flex justify-center items-center h-[50px]  sm:h-[60px] w-[50px] sm:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={google} />
                      </div>
                      <div className="flex justify-center items-center h-[50px]  sm:h-[60px] w-[50px] sm:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={fb} />
                      </div>
                      <div className="flex justify-center items-center h-[50px]  sm:h-[60px] w-[50px] sm:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={apple} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[29px] xl:mt-[20px] 2xl:mt-[29px]">
                      <div className="border-[2px] border-[#BCBCBC] w-[40%] sm:w-[205px]"></div>
                      <div className="text-[#BCBCBC] text-[16px]">or</div>
                      <div className="border-[2px] border-[#BCBCBC] w-[40%] sm:w-[205px]"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                      <div className="w-full">
                        <div className="text-black font-medium text-[17px] sm:text-[20px] mt-[21px]  font-DM">
                          First Name<sup className="text-[red]">*</sup>
                        </div>
                        <div
                          className={
                            errors.firstName && errors.firstName
                              ? "border-[2px] border-[red] h-[53px] sm:h-[63px] w-full sm:w-[228px] mt-[7px]  rounded-[41px]"
                              : "border-[2px] border-[#BCBCBC] h-[53px] sm:h-[63px] w-full sm:w-[228px] mt-[7px]  rounded-[41px]"
                          }
                        >
                          <Field
                            name="firstName"
                            placeholder="First Name"
                            className="h-full rounded-[41px] w-[90%] pl-[20px] sm:pl-[35px] font-normal border-none outline-none text-[#BCBCBC]"
                          />
                        </div>
                        <div className="text-[red] text-base pt-1 h-[15px] lg:h-[22px]">
                          <ErrorMessage name="firstName" />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="text-black font-medium text-[17px] sm:text-[20px] mt-[12px] sm:mt-[21px]  font-DM">
                          Last Name<sup className="text-[red]">*</sup>
                        </div>
                        <div
                          className={
                            errors.lastName
                              ? "border-[2px] border-[red] h-[53px] sm:h-[63px]  w-[100%] sm:w-[228px] mt-[7px]  rounded-[41px]"
                              : "border-[2px] border-[#BCBCBC] h-[53px] sm:h-[63px]  w-[100%] sm:w-[228px] mt-[7px]  rounded-[41px]"
                          }
                        >
                          <Field
                            name="lastName"
                            placeholder="Last Name"
                            className="h-full rounded-[41px] w-[90%] pl-[20px] sm:pl-[35px] border-none outline-none font-normal text-[#BCBCBC]"
                          />
                        </div>
                        <div className="text-[red] text-base pt-1 h-[15px] lg:h-[22px]">
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-black font-medium text-[17px] sm:text-[20px] mt-[12px]  font-DM">
                        Email Address<sup className="text-[red]">*</sup>
                      </div>
                      <div
                        className={
                          errors.email
                            ? "border-[2px] border-[red] h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                            : "border-[2px] border-[#BCBCBC] h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                        }
                      >
                        <Field
                          name="email"
                          placeholder="email@website"
                          className="h-full rounded-[41px] w-[100%] pl-[20px] sm:pl-[35px] border-none outline-none font-normal text-[#BCBCBC]"
                        />
                      </div>
                      <div className="text-[red] text-base pt-1 h-[15px] lg:h-[22px]">
                        <ErrorMessage name="email" />
                      </div>
                    </div>

                    <div>
                      <div className="text-black font-medium text-[17px] sm:text-[20px] mt-[12px]  font-DM">
                        Username<sup className="text-[red]">*</sup>
                      </div>
                      <div
                        className={
                          errors.userName
                            ? "border-[2px] border-[red] h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                            : "border-[2px] border-[#BCBCBC] h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                        }
                      >
                        <Field
                          name="userName"
                          placeholder="Your Scribbes username"
                          className="h-full rounded-[41px] w-[100%] pl-[20px] sm:pl-[35px] border-none outline-none font-normal text-[#BCBCBC]"
                        />
                      </div>
                      <div className="text-[red] text-base pt-1 h-[15px] lg:h-[22px]">
                        <ErrorMessage name="userName" />
                      </div>
                    </div>
                    <div>
                      <div className="text-black font-medium text-[17px] sm:text-[20px] mt-[12px]  font-DM">
                        Password<sup className="text-[red]">*</sup>
                      </div>
                      <div
                        className={
                          errors.password
                            ? "border-[2px] border-[red] h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                            : "border-[2px] border-[#BCBCBC] bg-white h-[53px] sm:h-[63px]  w-full mt-[7px]  rounded-[41px]"
                        }
                      >
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          className="h-full rounded-[41px] bg-white w-[100%] pl-[20px] sm:pl-[35px] border-none outline-none font-normal text-[#BCBCBC]"
                        />
                      </div>
                      <div className="text-[red] text-base pt-1 h-[15px] lg:h-[22px]">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[21px] ">
                      <div className="flex gap-[11px] items-center text-[11px] sm:text-[16px] font-medium font-DM">
                        <input
                          type="checkbox"
                          name="termsAndCondition"
                          class="accent-[#1CAC19] rounded-[6px] h-[15px] w-[15px]"
                          checked
                        />{" "}
                        I agree to the sites Privacy Policy and Cookie Policy
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="h-[53px] sm:h-[63px] cursor-pointer z-30  w-full mt-[12px] sm:mt-[26px]  font-DM rounded-[41px] bg-[#1CAC19] flex justify-center items-center cursor-pointer text-white text-[17px] sm:text-[20px] font-bold"
                    >
                      SIGN UP
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <Link href="/login">
              <div className="flex mt-[18px]   justify-center font-DM items-center text-[16px] font-bold cursor-pointer">
                Already a Member?&nbsp;{" "}
                <span className="text-[#1CAC19]"> Log in</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute left-0 right-0 z-0 bottom-[5px] sm:bottom-[0px] flex justify-center w-[90%] sm:w-full px-0 sm:px-12">
          <Image src={Scribbes} className="z-0" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
