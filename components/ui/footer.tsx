import PROFILE from "@/data/profile";

export default function Footer() {
  const { github, leetcode, linkedin } = PROFILE;
  return (
    <footer className="space-y-12 text-center pb-16">
      <div className="space-y-6">
        {/* Social icons */}
        <ul className="inline-flex gap-4">
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href={linkedin}
              aria-label="linkedin"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M14.667 0H1.333C.6 0 0 .6 0 1.333v13.334C0 15.4.6 16 1.333 16h13.334C15.4 16 16 15.4 16 14.667V1.333C16 .6 15.4 0 14.667 0ZM4.8 13.6H2.533V6.4H4.8v7.2ZM3.667 5.2c-.733 0-1.333-.6-1.333-1.333S2.934 2.533 3.667 2.533 5 3.133 5 3.867 4.4 5.2 3.667 5.2ZM13.6 13.6h-2.267V9.6c0-.6-.133-1.067-.667-1.267-.533-.267-1.2-.2-1.6.2-.267.267-.333.733-.333 1.2v4.267H6.533V6.4h2.267v.867c.267-.4.667-.867 1.333-1.067.8-.267 1.6-.267 2.267.267.6.6.8 1.333.8 2.133v4.8Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href={github}
              aria-label="GitHub"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
              </svg>
            </a>
          </li>
        </ul>
        {/* Copyright notes */}
        <p className="text-sm text-gray-400 dark:text-gray-600">
          &copy; Zhifa Qiu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
