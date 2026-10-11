/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CareerSection } from './components/CareerSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SkillsSection } from './components/SkillsSection';
import { CareerDirectionSection } from './components/CareerDirectionSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

import {
  profileData,
  aboutPillars,
  careerExperiences,
  projectsData,
  skillCategories,
} from './data/portfolioData';
import { ProjectCategory, ProjectItem } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSelectCategory = (cat: 'all' | ProjectCategory) => {
    setSelectedCategory(cat);
  };

  const handleSelectProjectById = (projectId: string) => {
    const target = projectsData.find((p) => p.id === projectId && p.visibility === 'public');
    if (target) {
      setSelectedProject(target);
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#14243A] flex flex-col font-sans selection:bg-[#315EFB]/15 selection:text-[#14243A]">
      {/* Top Navigation Bar */}
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 01: Hero */}
        <HeroSection
          profile={profileData}
          onResumeClick={() => setIsResumeModalOpen(true)}
        />

        {/* Section 02: About */}
        <AboutSection
          pillars={aboutPillars}
          onSelectCategory={(category) => {
            handleSelectCategory(category);
          }}
        />

        {/* Section 03: Career */}
        <CareerSection
          experiences={careerExperiences}
        />

        {/* Section 04: Selected Projects */}
        <ProjectsSection
          projects={projectsData}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onOpenProjectDetail={(project) => setSelectedProject(project)}
        />

        {/* Section 05: Skills */}
        <SkillsSection
          skills={skillCategories}
          onSelectProjectById={handleSelectProjectById}
        />

        {/* Section 06: Career Direction */}
        <CareerDirectionSection />

        {/* Section 07: Contact (파일 내용은 그대로 보존하며 화면에서만 미노출 처리) */}
        {/*
        <ContactSection
          profile={profileData}
          onResumeClick={() => setIsResumeModalOpen(true)}
        />
        */}
      </main>

      {/* Footer */}
      <Footer
        profile={profileData}
        onOpenDataGuide={() => {}}
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        allProjects={projectsData.filter((p) => p.visibility === 'public')}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profileData}
        career={careerExperiences}
        onOpenDataGuide={() => {}}
      />
    </div>
  );
}
