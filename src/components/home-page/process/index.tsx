import React from "react";
import Image from "next/image";
import TemplateImg from "../../../assets/home-page/template3.png";
import DashboardImg from "../../../assets/home-page/dashboard.png";

function index() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 text-center ">
      <div>
        <h4 className="text-5xl font-bold mb-8">Manage everything from one place</h4>
        <p className="text-lg text-slate-600">Wide range of templates to choose from</p>
      </div>
      <div className="flex items-center justify-center h-full w-full gap-9 border border-slate-200 rounded-lg p-5 shadow-xl">
        <div className="w-3/4 border-gray-600 overflow-hidden">
          <Image src={DashboardImg} alt="dashboard" />
        </div>

        <div className="w-1/4">
          <Image src={TemplateImg} alt="template" />
        </div>
      </div>
    </div>
  );
}

export default index;
