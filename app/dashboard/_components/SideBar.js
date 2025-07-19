import React from "react";
import { Button } from "@/components/ui/button";
import { Layout, Shield } from "lucide-react";
// import UploadPdfDialog from "./UploadPdfDialog";

function SideBar() {
  return (
    <div className="shadow-lg h-screen p-7">
     
      <div className="mt-10">
        

        <div className=" flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer">
          <Layout />
          <h2>Work Space</h2>
        </div>
        <div className=" flex gap-2 items-center p-3 mt-2 hover:bg-slate-100 rounded-lg cursor-pointer">
          <Shield />
          <h2>Upgrade</h2>
        </div>
        <div className="absolute bottom-24 w-[80%]">
        
          <p className="text-sm mt-1"> 2 out of 5 Pdf Uploaded</p>
          <p className="text-xs text-gray-400 mt-2">
            {" "}
            Upgrade to upload more PDF
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
