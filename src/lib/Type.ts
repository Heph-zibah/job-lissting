export interface JobListingItem {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
export interface JobListingProps {
  filters: {
    languages: string[];
    tools: string[];
    role: string;
    level: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      languages: string[];
      tools: string[];
      role: string;
      level: string;
    }>
  >;
  filteredJobs: JobListingItem[];
  handleFilterClick: (
    type: "role" | "level" | "languages" | "tools",
    value: string
  ) => void;
}
export interface FilterProps {
  filters: {
    languages: string[];
    tools: string[];
    role: string;
    level: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      languages: string[];
      tools: string[];
      role: string;
      level: string;
    }>
  >;
}