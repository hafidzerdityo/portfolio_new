"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { projectList } from "./project-data";

const ProjectPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Featured Projects</h1>
          <p className="text-muted-foreground mt-2">
            Explore my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="
                group bg-card border border-border rounded-2xl overflow-hidden
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                hover:-translate-y-1 transition-all duration-300 cursor-pointer
              "
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="absolute inset-0 object-cover object-center transition-all duration-300 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </h2>

                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {project.title} • {project.year}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tag.map((tag, idx) => (
                    <Badge
                      key={idx}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs flex items-center gap-1"
                    >
                      {tag.icon && (
                        <FontAwesomeIcon
                          icon={tag.icon}
                          className="text-[10px] lg:text-xs"
                        />
                      )}
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
