import ProjectsList from './components/ProjectsList';

const mockData = {
  "totalCount": 167,
  "filteredTotalCount": 167,
  "projects": [
    {
      "id": "184870ea-6be0-47df-baf0-87bf3c1cee64",
      "name": "EliDemo",
      "tenantId": "6ae562f0-8906-4fe5-86f3-fdc6c095dccd",
      "createdAt": "2023-01-29T10:23:08.173129Z",
      "updatedAt": "2024-01-01T21:58:14.321182Z",
      "groups": [],
      "tags": {
        "test": ""
      },
      "repoUrl": "",
      "mainBranch": "",
      "origin": "GitHub",
      "scmRepoId": "dsvw",
      "repoId": 108827,
      "criticality": 4,
      "privatePackage": false,
      "imported_proj_name": "EliDemoProjects/dsvw"
    },
    {
      "id": "1807c297-f273-4f72-8636-ed16ef87cd85",
      "name": "VeredOrg/VeredPublicRep",
      "tenantId": "6ae562f0-8906-4fe5-86f3-fdc6c095dccd",
      "createdAt": "2023-12-25T11:07:39.862051Z",
      "updatedAt": "2023-12-25T11:07:39.862051Z",
      "groups": [],
      "tags": {},
      "repoUrl": "",
      "mainBranch": "",
      "origin": "GitHub",
      "scmRepoId": "VeredPublicRep",
      "repoId": 107235,
      "criticality": 0,
      "privatePackage": false,
      "imported_proj_name": ""
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white p-6 pb-0">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 p-6 pt-2">
          Total Projects: {mockData.totalCount}
        </p>
        <ProjectsList projects={mockData.projects} />
      </div>
    </main>
  );
}