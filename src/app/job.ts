export interface JobSummary {
  slug: string;
  company_name: string;
  title: string;
}

export interface JobDetail {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: string
}
