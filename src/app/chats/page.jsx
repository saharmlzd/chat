"use client";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import profile1 from "@/assets/images/1.jpeg";
import profile2 from "@/assets/images/2.jpeg";
import profile3 from "@/assets/images/3.jpeg";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

const users = [
  { id: 1, name: "DeveshOjha", profile: profile1 },
  { id: 2, name: "Sachin", profile: profile2 },
  { id: 3, name: "Mohittyagi", profile: profile3 },
];
export default function HomePage() {
  const [tooltipHeight, setTooltipHeight] = useState(0);

  const router = useRouter();
  const outerDiv = useRef(null);

  const handleUserClick = (userName) => {
    router.push(`/chats/${userName}`);
  };
  // useEffect(() => {
  //   const { height } = outerDiv.current.getBoundingClientRect();
  //   setTooltipHeight(height);
  //   console.log(outerDiv.current.offsetHeight);
  // }, [outerDiv]);
  return (
    <>
      <div className="w-full bg-[#fcffff]rounded-3xl ">
        <div className="w-full bg-[#36B8B8] rounded-3xl pt-28 pb-4">
          <ul className="flex justify-around text-lg">
            <li>
              <a
                className="inline-block px-4 text-[#E9FEFE] font-semibold hover:text-blue-800 "
                href="#"
              >
                Chats
              </a>
            </li>
            <li>
              <a
                className=" inline-block  px-4 text-[#f5f5f5] hover:text-blue-800 font-semibold"
                href="#"
              >
                calls
              </a>
            </li>
          </ul>
        </div>
        <div>
          {users.map((user) => (
            <div
              className="px-4 py-5 "
              key={user.id}
              onClick={() => handleUserClick(user.name)}
            >
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="text-[#191919] font-medium	text-base	">
                      <tr>
                        <td className="bg-white ">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-full w-full rounded-full"
                                src={user.profile.src}
                                alt="png"
                              />
                            </div>
                            <div className="ml-3">
                              <p className="whitespace-no-wrap"> {user.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm">
                          <p className="whitespace-no-wrap">Editor</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
