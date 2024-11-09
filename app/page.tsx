import ThemeToggleSwitch from "@/components/theme-toggle-switch";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-4 text-blue-800 dark:text-blue-400">
        This is my header
      </header>

      <main className="flex-grow p-4 text-blue-800 dark:text-blue-400">
        This is my main
      </main>
      <footer className="flex flex-wrap items-center justify-center p-4">
        <div className="col-auto">
          <ThemeToggleSwitch></ThemeToggleSwitch>
        </div>
      </footer>
    </div>
  );
}
