"use client";

import bottomAuthDesign from "@/assets/images/bottom-auth-design.png";
import dalensAiImage from "@/assets/images/dalens-ai-logo.png";
import forgotPasswordBg from "@/assets/images/forgot-password-bg.png";
import loginBg from "@/assets/images/login-bg.png";
import resetPasswordBg from "@/assets/images/reset-password-bg.png";
import signUpBg from "@/assets/images/sign-up-bg.png";
import topAuthDesign from "@/assets/images/top-auth-design.png";
import { Input } from "@/components/auth";
import { cn } from "@/lib/utils";
import { GoogleLogin } from "@react-oauth/google";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

type props = {
  route: "sign-up" | "sign-in" | "reset-password" | "forgot-password";
};

const bgImages: Record<props["route"], string> = {
  "forgot-password": forgotPasswordBg.src,
  "reset-password": resetPasswordBg.src,
  "sign-in": loginBg.src,
  "sign-up": signUpBg.src,
};

const Auth: FC<props> = ({ route }) => {
  const isAuthRoute = route === "sign-in" || route === "sign-up";
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      rememberMe: false,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit(_props) {
      // TODO
    },
  });
  return (
    <>
      <style jsx global>
        {`
          body {
            background-color: #345e0a99;
            background-image: url("${bgImages[route]}");
            font-family: var(--font-poppins), sans-serif;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <main
        className={cn(
          // NOTE CSS VARIABLES ARE USED TO DEFINE HEIGHT AND REDUCE THE REPITION OF MATH CODE
          "pt-[calc((100lvh-var(--form-height))/2)]",
          route === "sign-up" &&
            "[--form-height:450px] lg:[--form-height:862px]",
          route === "sign-in" &&
            "[--form-height:504px] lg:[--form-height:811px]",
          !isAuthRoute && "[--form-height:256px] lg:[--form-height:559px]"
        )}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className="flex flex-col overflow-hidden relative items-center p-[32px] gap-[24px] max-w-[269px] lg:max-w-[879px] mx-auto bg-white rounded-[8px] lg:rounded-[10px] min-h-[--form-height]"
        >
          {/* STREAK-LIKE DESIGNS */}
          <>
            <Image
              alt=""
              priority
              width={420.15}
              height={270.56}
              draggable={false}
              src={topAuthDesign.src}
              className="hidden absolute -top-10 -left-40"
              onLoad={(e) => {
                e.currentTarget.classList.add("lg:block");
              }}
            />
            <Image
              alt=""
              priority
              width={372.99}
              height={336.4}
              draggable={false}
              src={bottomAuthDesign.src}
              className="hidden absolute -bottom-40 -right-10"
              onLoad={(e) => {
                e.currentTarget.classList.add("lg:block");
              }}
            />
          </>
          <figure className="m-0 p-0 hidden lg:block w-[244.49px] mx-auto">
            <Image
              height={111}
              width={244.49}
              draggable={false}
              alt="Dalens AI Logo"
              src={dalensAiImage.src}
            />
          </figure>
          <h2 className="font-medium lg:font-inter text-[18px] lg:text-[40px] leading-[27px] lg:leading-[48px] text-[#1A1A1A]">
            {route === "sign-in" && "Login"}
            {route === "sign-up" && "Create an Account"}
            {route === "forgot-password" && "Forgot Password?"}
            {route === "reset-password" && "Reset Password"}
          </h2>
          {isAuthRoute && (
            <>
              <GoogleLogin
                onSuccess={(token) => {
                  console.log(token);
                }}
              />
              {/* <button
                type="button"
                onClick={() => login()}
                className="flex flex-row justify-center items-center p-0 gap-[16px] min-w-[171px] lg:min-w-[347px] h-[24px] lg:h-[62px] bg-transparent"
              >
                <figure className="flex items-center justify-center m-0 p-0 rounded-[5px] shadow-md shadow-black/50 size-[24px] lg:w-[72px] lg:h-[62px]">
                  <SmGoogleSvg className="lg:hidden" />
                  <LgGoogleSvg className="hidden lg:inline-block" />
                </figure>
                <span className="font-medium lg:font-normal text-[12px] lg:text-[24px] leading-[18px] lg:leading-[36px] text-[#333333]">
                  Continue with Google
                </span>
              </button> */}
              <p className="font-medium lg:font-normal text-[24px] leading-[36px] text-[#333333]">
                OR
              </p>
            </>
          )}
          {/* SHOW EMAIL FOR ALL ROUTES EXCEPT PASSWORD RESET */}
          {route !== "reset-password" && (
            <form.Field name="email">
              {(field) => (
                <Input
                  required
                  type="email"
                  name={field.name}
                  value={field.state.value}
                  // SHOW "ENTER EMAIL" FOR FORGOT PASSWORD
                  placeholder={isAuthRoute ? "Email" : "Enter Email"}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={form.state.isSubmitting || form.state.isSubmitted}
                />
              )}
            </form.Field>
          )}
          {/* SHOW PASSWORD FOR EVERY ROUTE EXCEPT FORGOT PASSWORD */}
          {route !== "forgot-password" && (
            <form.Field name="password">
              {(field) => (
                <Input
                  required
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder={isAuthRoute ? "Password" : "New Password"}
                  disabled={form.state.isSubmitting || form.state.isSubmitted}
                />
              )}
            </form.Field>
          )}
          {/* SHOW PASSWORD CONFIRM FOR SIGN UP AND RESET PASSWORD ROUTES */}
          {(route === "sign-up" || route === "reset-password") && (
            <form.Field name="passwordConfirm">
              {(field) => (
                <Input
                  required
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={form.state.isSubmitting || form.state.isSubmitted}
                  placeholder={
                    isAuthRoute ? "Confirm Password" : "Confirm New Password"
                  }
                />
              )}
            </form.Field>
          )}
          {/* REMEMBER ME & FORGOT PASSWORD LINK FOR LOGIN */}
          {route === "sign-in" && (
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-[24px] lg:gap-0 lg:w-[750px]">
              <form.Field name="rememberMe">
                {(field) => (
                  <label
                    htmlFor={field.name}
                    className="flex flex-row items-center justify-center p-0 gap-[4px] lg:gap-[8px] min-w-[107px] lg:min-w-[152px]"
                  >
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={field.state.value}
                      onChange={(e) => field.handleChange(e.target.checked)}
                      disabled={
                        form.state.isSubmitting || form.state.isSubmitted
                      }
                      className="box-border size-[12px] lg:size-[24px] border border-solid border-[#333333] rounded-[5px]"
                    />
                    <span className="font-medium lg:font-normal text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] text-[#1A1A1A]">
                      Remember me
                    </span>
                  </label>
                )}
              </form.Field>
              <Link
                prefetch
                href="/auth/forgot-password"
                className="font-medium text-[12px] lg:text-[19px] leading-[18px] lg:leading-[28px] text-main"
              >
                Forgot Password?
              </Link>
            </div>
          )}
          {isAuthRoute && (
            <p className="font-medium text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] text-black text-center">
              {route === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <Link
                prefetch
                className="text-main"
                href={route === "sign-in" ? "/register" : "/login"}
              >
                {route === "sign-in" ? "Create one" : "Login"}
              </Link>
            </p>
          )}
          <button
            type="submit"
            disabled={form.state.isSubmitting || form.state.isSubmitted}
            className="flex flex-row items-center justify-center p-[20px_30px] min-w-[125px] lg:min-w-[133px] h-[48px] lg:h-[58px] bg-main hover:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-[5px]"
          >
            <span className="font-medium text-[17px] lg:text-[19px] leading-[26px] lg:leading-[28px] text-white">
              {route === "sign-in" && "Sign In"}
              {route === "sign-up" && "Sign Up"}
              {route === "forgot-password" && "Next"}
              {route === "reset-password" && "Done"}
            </span>
          </button>
        </form>
      </main>
    </>
  );
};

export default Auth;
