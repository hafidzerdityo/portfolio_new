import Image from "next/image";
import { projectList } from "../project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import BackButton from "@/components/utils/BackButton";

export function generateStaticParams() {
  return projectList.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectList.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto relative">
      <BackButton route="/project" />

      {/* Title */}
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-muted-foreground mt-2">{project.title}</p>

      {/* Description */}
      <div className="mt-10 text-sm text-muted-foreground leading-relaxed">
        <p>{project.desc}</p>
        <p className="mt-4">Year: {project.year}</p>
        <p>Date: {project.date}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tag.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-lg flex items-center gap-1"
          >
            {tag.icon && (
              <FontAwesomeIcon icon={tag.icon} className="text-[10px]" />
            )}
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
