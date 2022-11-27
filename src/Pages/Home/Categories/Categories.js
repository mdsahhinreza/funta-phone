import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="w-full  md:w-3/5 mx-auto mb-10">
      <div className="divider pb-10">
        <h2 className="text-3xl  uppercase font-bold">Top Categories</h2>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-4 align-middle mx-auto gap-4 justify-center">
        {categories.map((category, i) => (
          <Link
            key={i}
            to={`category/${category._id}`}
            className={`card p-5 shadow-xl md:p-8 border cursor-pointer bg-accent hover:bg-primary hover:text-white ${category.customClass}`}
          >
            <div key={i}>
              <p className="m-auto uppercase font-bold">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
