"use client";
import { useState } from "react";
import FloatInput from "@/components/FloatInput";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (username === "sahar" && password === "password123") {
    //   console.log("Logged in successfully!");
    // } else {
    //   console.log("Invalid credentials");
    // }
    if (mobile.length === 11) {
      router.push("/otp");
    }
  };

  return (
    <div class="w-full bg-[#E9FEFE]  h-screen ">
      <div className="w-90 h-52 bg-[#36B8B8] rounded-3xl mb-20 pl-5 pt-10">
        <ArrowLeft
          size="35"
          color="#f5f5f5"
          onClick={router.back}
          className="mt-4  cursor-pointer"
        />
        <div className="text-2xl font-semibold text-white">Login</div>
        <p className="font-medium text-white text-sm">
          Enter your 10-digit mobile number to continue.
        </p>
      </div>

      <div className="mr-12 ml-12 flex-col">
        <FloatInput
          placeholder="phone"
          type="tel"
          maxLength={13}
          onChange={(e) => {
            const { value } = e.target;
            if (value.length <= 13) {
              setMobile(value);
            }
          }}
          value={mobile}
        />

        <button
          disabled={mobile.length !== 13}
          className={`border w-full rounded-3xl p-3 mt-5 text-white ${
            mobile.length !== 13 ? "bg-[#8FDBDB]" : "bg-[#36B8B8]"
          }`}
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      <footer className="mt-5 flex justify-center items-center">
        <div>Dont have an account </div>
        <Link href="/register" className="no-underline text-[#36B8B8] ml-2">
          Register
        </Link>
      </footer>
    </div>
  );
}
