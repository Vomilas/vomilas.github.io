import { Logo } from "@/components/Header/Logo/Logo";

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary">
      <Logo width={240} height={235} />
    </div>
  );
};
