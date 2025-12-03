"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
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
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 space-y-10">
        {/* EXPERIENCE */}
        <section className="space-y-4">
          <h1 className="text-lg font-semibold">Experience</h1>

          <div className="space-y-4">
            {experienceList.map((job, index) => (
              <Card key={index} className="rounded-xl shadow-sm">
                <CardContent className="p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-base font-medium">{job.role}</h3>

                      <a
                        href={job.link}
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                      >
                        {job.company}
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="text-left sm:text-right">
                      <Badge variant="secondary" className="text-xs">
                        {job.type}
                      </Badge>
                      <div className="text-[11px] text-muted-foreground mt-1">
                        {job.date}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground mt-1"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Education</h2>

          {educationList.map((edu, idx) => (
            <Card key={idx} className="rounded-xl shadow-sm">
              <CardContent className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-base font-medium">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.university_name}
                  </p>
                </div>

                <Badge variant="secondary" className="text-xs">
                  {edu.year_start} - {edu.year_end}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </section>

        <Separator />

        {/* DOWNLOAD RESUME */}
        <div className="flex justify-center pt-4">
          <Button variant="secondary" className="w-full sm:w-auto" asChild>
            <a href="./static/cv/hafidz-resume.pdf" download>
              Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
