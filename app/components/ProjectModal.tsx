'use client';

import { Project } from '../types/project';
import { formatDate } from '../utils/date';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <DetailItem label="ID" value={project.id} />
            <DetailItem label="Tenant ID" value={project.tenantId} />
            <DetailItem label="Created At" value={formatDate(project.createdAt)} />
            <DetailItem label="Updated At" value={formatDate(project.updatedAt)} />
            <DetailItem label="Origin" value={project.origin} />
            <DetailItem label="SCM Repo ID" value={project.scmRepoId} />
            <DetailItem label="Repo ID" value={project.repoId.toString()} />
            <DetailItem label="Criticality" value={project.criticality.toString()} />
            <DetailItem label="Private Package" value={project.privatePackage ? 'Yes' : 'No'} />
            <DetailItem label="Main Branch" value={project.mainBranch || 'N/A'} />
            <DetailItem label="Repo URL" value={project.repoUrl || 'N/A'} />
            <DetailItem 
              label="Imported Project Name" 
              value={project.imported_proj_name || 'N/A'} 
            />
          </div>

          {project.groups.length > 0 && (
            <div className="border-t pt-4 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Groups</h3>
              <div className="flex flex-wrap gap-2">
                {project.groups.map((group, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          )}

          {Object.keys(project.tags).length > 0 && (
            <div className="border-t pt-4 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(project.tags).map(([key, value]) => (
                  <span 
                    key={key}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    {key}{value && `: ${value}`}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 dark:text-white break-all">{value}</dd>
    </div>
  );
}