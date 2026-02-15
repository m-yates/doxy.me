import { USERS } from "../lib/constants";
import { cn } from "../lib/utils";

interface Props {
  currentUser: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export default function Nav({ currentUser, setCurrentUser, className }: Props) {
  function handleChangeUser(user: string) {
    setCurrentUser(user);
  }
  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 flex items-center justify-end gap-5 p-4 text-black",
        className
      )}
    >
      <h1 className="mr-auto font-bold">Doxy.me</h1>
      {USERS.map((user) => (
        <button
          key={user}
          onClick={() => handleChangeUser(user)}
          className={cn(
            "cursor-pointer text-sm tracking-wide underline-offset-4",
            user === currentUser && "underline"
          )}
        >
          {user.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}
