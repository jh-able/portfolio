/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ExecutiveReportView } from './components/ExecutiveReportView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Footer } from './components/Footer';

import { profileData, projectsData } from './data/portfolioData';
import { ProjectItem } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#14243A] flex flex-col font-sans selection:bg-[#0E0F37]/15 selection:text-[#14243A]">
      {/* Top Header */}
      <Navbar />

      {/* Main: 1-Page Executive Report View Only */}
      <main className="flex-1">
        <ExecutiveReportView
          onOpenProjectDetail={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Footer */}
      <Footer profile={profileData} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        allProjects={projectsData.filter((p) => p.visibility === 'public')}
      />
    </div>
  );
}
