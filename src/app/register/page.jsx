"use client";
import { useState } from "react";
import FloatInput from "@/components/FloatInput";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/otp");
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
        <div className="text-2xl font-semibold text-white">Register</div>
        <p className="font-medium text-white text-sm">
          Fill up your details to register.
        </p>
      </div>

      <div className="mr-12 ml-12 flex-col">
        <FloatInput
          placeholder="Name"
          type="text"
          onChange={(e) => {
            const { value } = e.target;

            setName(value);
          }}
          value={name}
        />
        <FloatInput
          placeholder="Email"
          type="email"
          onChange={(e) => {
            const { value } = e.target;

            setGmail(value);
          }}
          value={gmail}
          required
        />
        <FloatInput
          placeholder="Mobile"
          type="tel"
          required
          maxLength={11}
          onChange={(e) => {
            const { value } = e.target;
            if (value.length <= 11) {
              setMobile(value);
            }
          }}
          value={mobile}
        />

        <button
          disabled={mobile.length !== 11 && name && gmail}
          className={`border w-full rounded-3xl p-3 mt-5 text-white ${
            mobile.length === 11 && name && gmail
              ? "bg-[#36B8B8]"
              : "bg-[#8FDBDB]"
          }`}
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>

      <footer className="mt-5 flex justify-center items-center">
        <div>Dont have an account </div>
        <Link href="/login" className="no-underline text-[#36B8B8] ml-2">
          Login
        </Link>
      </footer>
    </div>
  );
}
