import React from "react";
import { DiApple } from "react-icons/di";
import { SiXiaomi, SiNokia, SiBlackberry, SiSamsung } from "react-icons/si";
import { TbLetterW } from "react-icons/tb";

const Categories = () => {
  return (
    <div className="w-full  md:w-3/5 mx-auto mb-10">
      <div className="divider pb-10">
        <h2 className="text-3xl  uppercase font-bold">Top Categories</h2>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-4 align-middle mx-auto gap-4 justify-center">
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
          <p className="m-auto">
            <DiApple className="text-4xl"></DiApple>
          </p>
        </div>
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary md:col-span-2">
          <p className="m-auto">
            <SiXiaomi className="text-3xl"></SiXiaomi>
          </p>
        </div>
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
          <p className="m-auto">
            <SiNokia className="text-6xl"></SiNokia>
          </p>
        </div>
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
          <p className="m-auto">
            <SiBlackberry className="text-3xl"></SiBlackberry>
          </p>
        </div>
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary md:col-span-2">
          <p className="m-auto">
            <SiSamsung className="text-6xl"></SiSamsung>
          </p>
        </div>
        <div className="card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary">
          <p className="m-auto font-bold text-4xl">
            <TbLetterW></TbLetterW>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
