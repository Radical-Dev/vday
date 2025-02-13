"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

function page() {
  const [loading, setloading] = useState(false);
  const [emailSent, setemailSent] = useState(false);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    setloading(true);
    const url = "/api/send";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        note: (e.target as HTMLElement).innerText,
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setloading(false);
        setemailSent(true);
      });
  };

  return (
    <div className=" w-full h-full grid max-h-screen overflow-x-hidden overflow-y-hidden min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] place-items-center relative">
      <div className="flex flex-col w-[30%] z-20">
        <h1 className="text-neutral text-3xl tracking-widest text-center leading-loose">
          Will you <br /> be my <br /> Valentine?
        </h1>

        {loading ? (
          <span
            className={
              emailSent
                ? "hidden"
                : "loading text-center mx-auto loading-infinity loading-lg w-20"
            }
          ></span>
        ) : (
          <div
            className={
              emailSent ? "hidden" : "flex relative justify-around mt-8 z-10"
            }
          >
            <button
              onClick={sendEmail}
              className="btn  btn-neutral text-neutral-content text-1xl tracking-widest px-14 rounded-md"
            >
              Yes of Course
            </button>
            <button
              onClick={sendEmail}
              className="btn  bg-info-content text-base-content text-1xl tracking-widest px-14 rounded-md"
            >
              Yes
            </button>
          </div>
        )}

        <div
          role="alert"
          className={emailSent ? "alert alert-success" : "hidden"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-neutral-content"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-neutral-content">Confirmation sent</span>
        </div>
      </div>

      <div className="h-[60%] absolute -top-5 left-0 z-0 rotate-[20deg]">
        <Image
          className="w-auto h-full"
          src="/seated.jpg"
          alt="seated image"
          width="500"
          height="500"
        ></Image>
      </div>
      <div className="h-[60%] absolute -bottom-10 left-0 z-0 rotate-[-10deg]">
        <Image
          className="w-auto h-full"
          src="/dr.jpeg"
          alt="seated image"
          width="500"
          height="500"
        ></Image>
      </div>

      <div className="h-[33%] absolute top-10 right-20 z-0 rotate-12">
        <Image
          className="w-auto h-full"
          src="/firstd.jpeg"
          alt="first date"
          width="500"
          height="500"
        ></Image>
      </div>

      <div className="h-[26%] absolute top-72 -right-6 z-0 rotate-[-15deg]">
        <Image
          className="w-auto h-full"
          src="/car.jpeg"
          alt="car image"
          width="500"
          height="500"
        ></Image>
      </div>

      <div className="h-[25%] absolute bottom-10 right-20 z-0 ">
        <Image
          className="w-auto h-full"
          src="/drdriving.jpg"
          alt="driving in dr"
          width="500"
          height="500"
        ></Image>
      </div>
    </div>
  );
}

export default page;
