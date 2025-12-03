"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Briefcase, GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  type ExperienceItem = {
    date: string;
    role: string;
    company: string;
    type: string;
    link: string;
    description: string[];
  };

  type EducationItem = {
    year_start: string;
    year_end: string;
    university_name: string;
    degree: string;
  };

  const experienceList: ExperienceItem[] = [
    {
      date: "Nov 2022 - Present",
      role: "Backend Engineer",
      company: "Pos Indonesia",
      type: "Full-time",
      link: "https://www.posindonesia.co.id/en",
      description: [
        "Developing backend for PosAjaUMKM using Go Fiber.",
        "Developing backend for Pos Giro Cash using Nest.js.",
        "Developing backend for Pospay Mobile using Java Spring Boot.",
        "Developed and deployed multiple computer vision models using PyTorch + FastAPI.",
      ],
    },
    {
      date: "Apr 2021 - Nov 2022",
      role: "Backend Engineer",
      company: "Bank BCA Syariah",
      type: "Full-time",
      link: "https://www.bcasyariah.co.id/",
      description: [
        "Developed and maintained BCA Syariah's Core Banking System API and Branch Distribution System API, utilizing Go with gRPC for distributed core banking services and Fiber for the Branch Distribution System API.",
        "Developing and maintaining BJB Syariah's backend for Branch Distribution System, Mobile Banking API, Customer relationship Management, Cash Management System, utilizing Go gRPC and Fiber.",
      ],
    },
  ];

  const educationList: EducationItem[] = [
    {
      year_start: "2015",
      year_end: "2020",
      university_name: "Telkom University",
      degree: "Bachelor of Engineering in Electrical & Electronics",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
            <p className="text-muted-foreground mt-1">
              My professional journey and education.
            </p>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <a href="./static/cv/hafidz-resume.pdf" download>
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <Separator />

        {/* EXPERIENCE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
          </div>

          <div className="relative border-l border-muted ml-3 md:ml-4 space-y-12 pb-4">
            {experienceList.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                    {job.date}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <a
                    href={job.link}
                    target="_blank"
                    className="text-base font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    {job.company}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{job.type}</span>
                </div>

                <ul className="space-y-2 text-muted-foreground">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Education</h2>
          </div>

          <div className="relative border-l border-muted ml-3 md:ml-4 space-y-12 pb-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {edu.university_name}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                    {edu.year_start} - {edu.year_end}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-medium text-primary">
                    {edu.degree}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default page;
