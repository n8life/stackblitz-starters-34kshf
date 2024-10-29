'use client';

import { useState } from 'react';
import { Project } from '../types/project';
import { formatDate } from '../utils/date';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ID: {project.id}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            project.privatePackage 
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}>
            {project.privatePackage ? 'Private' : 'Public'}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Origin:</span> {project.origin}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Criticality:</span> {project.criticality}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Created:</span> {formatDate(project.createdAt)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Updated:</span> {formatDate(project.updatedAt)}
            </p>
          </div>
        </div>

        {Object.keys(project.tags).length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(project.tags).map(([key, value]) => (
                <span 
                  key={key}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                >
                  {key}{value && `: ${value}`}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full"
        >
          More Info
        </button>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}