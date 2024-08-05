import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import profile from "@/data/profile";
import ResumeButton from "../ResumeButton";

export default function Header() {
  return (
    <header className="text-center pt-6">
      {/* Dark mode toggle */}
      <ThemeToggle />
      {/* Intro */}
      <div className="mb-10">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={profile.avatar}
          width={80}
          height={80}
          alt={profile.name}
          priority
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            {profile.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {profile.description}
          </p>
        </div>
        <ResumeButton />
      </div>
    </header>
  );
}
