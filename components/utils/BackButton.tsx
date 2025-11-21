"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type BackButtonProps = {
  route: string;
};

export default function BackButton({ route }: BackButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(route)}
      className="cursor-pointer group mb-8 lg:mb-12 inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-base-200 transition-colors"
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-sm lg:text-base text-base-content group-hover:-translate-x-1 transition-transform"
      />
      <span className="text-sm lg:text-base">Back</span>
    </button>
  );
}
