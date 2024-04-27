"use client";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import OtpInput from "@/components/OtpInput";
import "@/styles/input.scss";
export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    router.push("/home");
  };

  return (
    <div className="w-full bg-[#E9FEFE]  h-screen ">
      <div className="w-90 h-52 bg-[#36B8B8] rounded-3xl mb-20 pl-5 pt-10">
        <ArrowLeft
          size="35"
          color="#f5f5f5"
          onClick={router.back}
          className="mt-4  cursor-pointer"
        />
        <div className="text-2xl font-semibold text-white">
          OTP verification
        </div>
        <p className="font-medium text-white text-sm flex-1">
          Please enter your correct OTP for number verification process.
        </p>
      </div>

      <div className="mr-12 ml-12 flex-col">
        <OtpInput allowedOtpLength={4} className="border-[#36B8B8]" />

        <button
          className="border w-full rounded-3xl p-3 mt-5 text-white 
             bg-[#36B8B8]"
          onClick={handleSubmit}
        >
          Verify
        </button>
      </div>

      <footer className="mt-5 flex justify-center items-center">
        <a className="underline text-[#36B8B8] ml-2">Resend OTP</a>
      </footer>
    </div>
  );
}
