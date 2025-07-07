import type { FilterProps } from "../lib/Type";

const Filters = ({ filters, setFilters }: FilterProps) => {
  return (
    <div className="">
      {(filters.languages.length > 0 ||
        filters.tools.length > 0 ||
        filters.role.length > 0 ||
        filters.level.length > 0) && (
        <div className="px-5 max-w-4xl mx-auto -mt-32 ">
          <div className="bg-white mb-10 rounded-lg flex items-center justify-between px-5 py-5 md:px-10 shadow-md hover:shadow-lg transition-shadow duration-300 text-sm">
            <div className="flex flex-wrap items-center gap-3">
              {filters.languages.map((lang) => (
                <p
                  key={lang}
                  className=" bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1  pl-2 rounded-sm"
                >
                  {lang}
                  <span
                    className="text-white bg-[#61A8A8] p-2 rounded-e-sm ml-5 cursor-pointer"
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        languages: prev.languages.filter(
                          (item) => item !== lang
                        ),
                      }))
                    }
                  >
                    X
                  </span>
                </p>
              ))}

              {filters.tools.map((tool) => (
                <p
                  key={tool}
                  className="bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1 pl-2 rounded-sm"
                >
                  {tool}
                  <span
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        tools: prev.tools.filter((item) => item !== tool),
                      }))
                    }
                    className="text-white bg-[#61A8A8] p-2 rounded-e-sm ml-5 cursor-pointer"
                  >
                    X
                  </span>
                </p>
              ))}
              {filters.role && (
                <p className=" bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1  pl-2 rounded-sm">
                  {filters.role}
                  <span
                    className="text-white bg-[#61A8A8] p-2 rounded-e-sm ml-5 cursor-pointer"
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        role: "",
                      }))
                    }
                  >
                    X
                  </span>
                </p>
              )}

              {filters.level && (
                <p className=" bg-[#EEF6F6] text-[#61A8A8] font-semibold py-1  pl-2 rounded-sm">
                  {filters.level}
                  <span
                    className="text-white bg-[#61A8A8] p-2 rounded-e-sm ml-5 cursor-pointer"
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        level: "",
                      }))
                    }
                  >
                    X
                  </span>
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setFilters({ languages: [], tools: [], role: "", level: "" });
              }}
              className="text-sm font-semibold text-[#8E7B7B] hover:text-gray-800"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
