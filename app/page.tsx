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
} from "lucide-react";

import Image from "next/image";

import {
  faPython,
  faAws,
  faGolang,
  faJava,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const techStackList = [
  { name: "Go • Fiber • gRPC", icon: faGolang, color: "bg-neutral-800" },
  { name: "Python • FastAPI", icon: faPython, color: "bg-neutral-800" },
  { name: "Java • Spring Boot", icon: faJava, color: "bg-neutral-800" },
  { name: "Javascript • Next.js", icon: faReact, color: "bg-neutral-800" },
  { name: "Amazon Web Service", icon: faAws, color: "bg-neutral-800" },
];

const stats = [
  { icon: Clock, value: "4+", title: "Years of Experience" },
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
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <Card className="shadow-md rounded-xl p-6 bg-card">
          <CardHeader className="p-0 mb-2">
            <div className="flex items-center gap-4">
              <User className="w-10 h-10 text-primary" />
              <div>
                <CardTitle className="text-2xl font-bold">
                  Muhammad Hafidz Erdityo
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge
                    variant="default"
                    className="bg-primary/10 text-primary"
                  >
                    Software Engineer
                  </Badge>
                  <Badge variant="secondary">Backend</Badge>
                  <Badge variant="outline">🇮🇩 Indonesia</Badge>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              I'm a Software Engineer with {stats[0].value} years of specialized
              experience in Backend Engineering, building microservices for
              fintech applications including sharia-compliant banking systems
              for major institutions like Bank BCA Syariah, Bank BJB Syariah,
              and other app such as Pospay Superapp and PosAjaUMKM.
            </p>
          </CardContent>
        </Card>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, idx) => (
            <Card
              key={idx}
              className="text-center transition-all shadow-sm hover:shadow-md rounded-lg"
            >
              <CardContent className="p-4 flex flex-col items-center">
                <s.icon className="w-5 h-5 text-primary mb-2" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs uppercase text-muted-foreground">
                  {s.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* EXPERTISE + STACK */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Expertise */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">
              Core Expertise
            </h2>
            <ul className="space-y-3">
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
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">{item.title}:</span>{" "}
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">
              Key Tech Stack
            </h2>
            <div className="grid gap-2">
              {techStackList.map((tech, idx) => (
                <Card key={idx} className="p-3 shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg text-white ${tech.color} flex items-center justify-center`}
                    >
                      <FontAwesomeIcon icon={tech.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* CLIENTS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notable Clients & Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {clients.map((client, idx) => (
              <Card key={idx} className="rounded-xl shadow-md overflow-hidden">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3 border-b pb-2">
                    <Image
                      src={client.logoUrl}
                      alt={client.name}
                      width={80}
                      height={40}
                      className="w-20 h-10 object-contain"
                    />
                    <h3 className="font-semibold">{client.name}</h3>
                  </div>

                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {client.projects.map((proj, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-primary" />
                        {proj}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="https://t.me/hafidzerdityo" target="_blank">
                <SendHorizontal className="w-4 h-4 mr-2" />
                Telegram
              </a>
            </Button>

            <Button
              onClick={handleCopyEmail}
              variant={copied ? "default" : "outline"}
              className="w-full sm:w-auto cursor-pointer"
            >
              <Mail className="w-4 h-4 mr-2" />
              {email}
              {copied ? (
                <Badge className="ml-2 bg-white text-secondary">Copied!</Badge>
              ) : (
                <Copy className="w-3 h-3 ml-2 text-muted-foreground" />
              )}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
