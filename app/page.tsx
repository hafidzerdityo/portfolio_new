"use client";
import * as React from "react";
import {
  Mail,
  Copy,
  Check,
  Clock,
  Briefcase,
  Code,
  SendHorizontal,
  ChevronRight,
  User,
  ArrowUpRight,
} from "lucide-react";

import Image from "next/image";

import {
  faPython,
  faAws,
  faGolang,
  faJava,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const techStackList = [
  { name: "Go • Fiber • gRPC", icon: faGolang, color: "bg-neutral-800" },
  { name: "Python • FastAPI", icon: faPython, color: "bg-neutral-800" },
  { name: "Java • Spring Boot", icon: faJava, color: "bg-neutral-800" },
  { name: "Javascript • Next.js", icon: faReact, color: "bg-neutral-800" },
  { name: "Javascript • Node.js", icon: faNode, color: "bg-neutral-800" },
  { name: "Amazon Web Service", icon: faAws, color: "bg-neutral-800" },
];

const stats = [
  { icon: Clock, value: "4+", title: "Years Exp." },
  { icon: Code, value: "7+", title: "Projects" },
  { icon: Briefcase, value: "3", title: "Companies" },
];

const clients = [
  {
    name: "Bank BJB Syariah",
    logoUrl: "./static/clientlogo/bjb-syariah.png",
    projects: [
      "Core Banking System",
      "Branch Distribution System",
      "Mobile Banking API",
    ],
  },
  {
    name: "Bank BCA Syariah",
    logoUrl: "./static/clientlogo/bcas-logo.png",
    projects: ["Core Banking System", "Branch Distribution System"],
  },
];

const page = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "hafidze15@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Muhammad Hafidz Erdityo
            </h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                Software Engineer
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                Backend Specialist
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                🇮🇩 Indonesia
              </Badge>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I build resilient microservices and high-performance backend systems. 
            Specializing in fintech and sharia-compliant banking solutions for major institutions.
          </p>

          <div className="flex items-center gap-12 pt-4">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">{s.value}</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* EXPERTISE & STACK */}
        <section className="grid md:grid-cols-2 gap-16">
          {/* Expertise */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Core Expertise</h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Banking & Finance",
                  desc: "Core systems implementation & financial platforms.",
                },
                {
                  title: "Scalable Architecture",
                  desc: "Designing resilient microservices for high-throughput workloads.",
                },
                {
                  title: "High-Performance APIs",
                  desc: "FastAPI, Go Fiber, Spring Boot, and async architecture.",
                },
              ].map((item, idx) => (
                <li key={idx} className="group">
                  <h3 className="font-medium text-foreground flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStackList.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-border hover:bg-secondary/30 transition-all"
                >
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${tech.color} shrink-0`}>
                    <FontAwesomeIcon icon={tech.icon} className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CLIENTS */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold tracking-tight">Notable Clients & Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-lg border w-fit">
                    <Image
                      src={client.logoUrl}
                      alt={client.name}
                      width={80}
                      height={40}
                      className="w-20 h-10 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{client.name}</h3>
                </div>

                <ul className="space-y-2 pl-1">
                  {client.projects.map((proj, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1 h-1 rounded-full bg-primary/50" />
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="pt-8 pb-8">
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Let's work together</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Interested in building scalable backend systems? Reach out and let's discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="https://t.me/hafidzerdityo" target="_blank">
                  <SendHorizontal className="w-4 h-4" />
                  Telegram
                </a>
              </Button>

              <Button
                onClick={handleCopyEmail}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                {email}
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default page;
