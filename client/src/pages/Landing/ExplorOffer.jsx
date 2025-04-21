import React from "react";
import { ExploreOfferData } from "../../data/ExploreOfferData";
const ExplorOffer = () => {
  return (
    <section className="w-full h-96 grid justify-center" id="talentbycategory">
      <h1 className="text-3xl  mx-6 p-2 font-bold">
        {ExploreOfferData.enterprise.title}
      </h1>
      <h3 className="font-bold pl-8 pb-2 text-[var(--light-lime-green)]">
        {ExploreOfferData.enterprise.tagline}
      </h3>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 mx-auto sm:grid-cols-2 md:grid-cols-4 gap-5 justify-center">
        {ExploreOfferData.categories.map((item, i) => {
          return (
            <div
              key={i}
              className="w-48 h-24 flex flex-col gap-5  rounded-sm cursor-pointer shadow bg-[var(--gray-95)] hover:bg-[var(--gray-70)] p-1"
            >
              <h5 className="text-start pl-5 text-wrap font-bold">
                {item.name}
              </h5>
              <div className="flex items-center gap-15 text-sm justify-center font-semibold">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-green-500 ">
                    star
                  </span>
                  <p>{item.rating}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p>{item.skills}</p>
                  <span className="">skills</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExplorOffer;
