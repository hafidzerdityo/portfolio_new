"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { projectList } from "./project-data";

const ProjectPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of my recent work, featuring scalable backend systems and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projectList.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="group cursor-pointer space-y-4"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-secondary/20">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with arrow */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <ArrowUpRight className="w-5 h-5 text-foreground" />
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h2 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {project.name}
                  </h2>
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                  {project.title}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tag.slice(0, 3).map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs font-normal bg-secondary/50 text-muted-foreground flex items-center gap-1.5"
                    >
                      {tag.icon && (
                        <FontAwesomeIcon
                          icon={tag.icon}
                          className="w-3 h-3"
                        />
                      )}
                      {tag.name}
                    </Badge>
                  ))}
                  {project.tag.length > 3 && (
                     <Badge variant="secondary" className="text-xs font-normal bg-secondary/50 text-muted-foreground">
                       +{project.tag.length - 3}
                     </Badge>
                  )}
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
