import { useAppStore } from "../hooks/use-app-store";
import { USERS } from "../lib/constants";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export default function Nav({ className }: Props) {
  const { currentUser, setCurrentUser } = useAppStore();

  return (
    <nav className={cn("flex items-center justify-end gap-4", className)}>
      <button
        aria-label="Doxy.me"
        onClick={() => setCurrentUser(null)}
        className="mr-auto cursor-pointer font-bold outline-offset-6 focus:outline-white"
      >
        Doxy.me
      </button>
      {USERS.map((user) => (
        <button
          key={user}
          aria-label={`Switch to ${user}`}
          onClick={() => setCurrentUser(user)}
          className={cn(
            "relative cursor-pointer text-sm tracking-wide underline-offset-4 outline-offset-6 focus:outline-white",
            "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-current after:transition-transform after:duration-200 after:ease-out",
            "after:origin-center after:content-['']",
            user === currentUser ? "after:scale-x-100" : "after:scale-x-0"
          )}
        >
          {user.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}
