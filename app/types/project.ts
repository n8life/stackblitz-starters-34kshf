export interface Project {
  id: string;
  name: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
  groups: string[];
  tags: Record<string, string>;
  repoUrl: string;
  mainBranch: string;
  origin: string;
  scmRepoId: string;
  repoId: number;
  criticality: number;
  privatePackage: boolean;
  imported_proj_name: string;
}