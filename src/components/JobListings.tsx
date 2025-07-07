import JobListing from "./JobListing";
import { useState } from "react";
import data from "../data/data.json";
import type { JobListingItem } from "../lib/Type";
import Filters from "./Filters";

const JobListings = () => {
  const jobs: JobListingItem[] = data;

  const [filters, setFilters] = useState({
    languages: [] as string[],
    tools: [] as string[],
    role: "",
    level: "",
  });

  const handleFilterClick = (type: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      if (type === "languages" || type === "tools") {
        const exists = prev[type].includes(value);
        return {
          ...prev,
          [type]: exists
            ? prev[type].filter((item) => item !== value)
            : [...prev[type], value],
        };
      }

      // role or level (toggle string value)
      return {
        ...prev,
        [type]: prev[type] === value ? "" : value,
      };
    });
  };

  const filteredJobs = jobs.filter((item) => {
    return (
      (filters.languages.length === 0 ||
        filters.languages.every((lang) => item.languages.includes(lang))) &&
      (filters.tools.length === 0 ||
        filters.tools.every((tool) => item.tools.includes(tool))) &&
      (filters.role === "" || filters.role === item.role) &&
      (filters.level === "" || filters.level === item.level)
    );
  });

  return (
    <main className="my-24 relative">
      <Filters filters={filters} setFilters={setFilters} />
      <JobListing
        filters={filters}
        setFilters={setFilters}
        handleFilterClick={handleFilterClick}
        filteredJobs={filteredJobs}
      />
    </main>
  );
};

export default JobListings;
