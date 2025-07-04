import { useState } from "react";
import data from "../data/data.json";
import type{JobListingItem} from "../lib/Type"

const JobListing = () => {
  const jobs: JobListingItem[] = data
  const [selectLanguage, setSelectLanguage] = useState<string | null>(null);
  const [selectTool, setSelectTool] = useState<string | null>(null);

  const filteredJobs = jobs.filter((item) => {
    const matchesLanguage = selectLanguage ? item.languages.includes(selectLanguage) : true;
    const matchesTool = selectTool ? item.tools.includes(selectTool) : true

    return matchesLanguage && matchesTool
})

  const handleFilterClick = (type :"language" | "tool", value: string) => {
    if(type === "language"){
      setSelectLanguage((prev) => (prev === value ? null : value));
    } 
    if (type === "tool") {
      setSelectTool((prev) => (prev === value ? null : value));
    } 

  }
  return (
    <section className="px-5 max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        {filteredJobs.map((item) => (
          <div
            key={item.id}
            className="bg-white text-[15px] py-3 px-2 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <div>
                <img src={item.logo} alt="" />
              </div>
              <div>
                <div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-[#61A8A8] font-semibold">
                      {item.company}
                    </p>
                    {item.new ? (
                      <span className="uppercase bg-[#61A8A8] text-white text-xs rounded-2xl font-medium px-2 pt-2 pb-1">
                        new!
                      </span>
                    ) : (
                      <span></span>
                    )}
                    {item.featured ? (
                      <span className="uppercase bg-[#3A2C2C] text-white text-xs rounded-2xl font-medium px-2 pt-2 pb-1">
                        featured
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div></div>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#3A2C2C]">
                    {item.position}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#8E7B7B] font-medium">
                  <span>{item.postedAt}</span>
                  <div className="w-1 h-1 bg-[#8E7B7B] rounded-full"></div>
                  <span>{item.contract}</span>
                  <div className="w-1 h-1 bg-[#8E7B7B] rounded-full"></div>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {item.languages.map((language, index) => (
                <span
                  key={index}
                  onClick={() => handleFilterClick("language", language)}
                  className="bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1 px-2 rounded-sm cursor-pointer"
                >
                  {language}
                </span>
              ))}
              {item.tools.map((tool, index) => (
                <span
                  key={index}
                  onClick={() => handleFilterClick("tool", tool)}
                  className="bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1 px-2 rounded-sm cursor-pointer"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListing;
