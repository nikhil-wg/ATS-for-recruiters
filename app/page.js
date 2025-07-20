"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <nav className="flex justify-between items-center p-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5"></div>
          </div>
        </div>
        <div className="text-2xl font-light text-slate-800 tracking-wide">
          Kanaka 
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-light text-slate-800 mb-6 leading-tight">
          Make hiring easy for kanaka
          <br />
          and more human.
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Applicant Tracking System (ATS) that makes the online
          hiring process simpler, more intuitive and a little more human.
        </p>
        <div className=" flex items-center justify-center bg-white8 mb-8">
          <button
            onClick={handleClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg"
          >
           Get stated
          </button>
        </div>
        <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 m-2 mt-2">
          {/* Mock Dashboard Interface with Filtering */}
          <div className="space-y-6">
            <Image
              src="/demo.png" // Placeholder image URL
              alt="Dashboard Preview"
              width={1200} // Set appropriate width
              height={600} // Set appropriate height
              layout="responsive" // Makes image responsive
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
