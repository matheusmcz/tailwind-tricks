import { Button } from "./components/Button";

export function App() {
  return (
    <div className=" text-zinc-50 flex h-screen items-center justify-center bg-zinc-950 flex-col gap-6">
      <Button success className="w-20">
        Sign In
      </Button>
      <Button size="sm">Sign In</Button>
      <Button size="xm">Sign In</Button>
      <Button>Sign In</Button>
    </div>
  );
}
