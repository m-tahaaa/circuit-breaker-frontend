import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface HeaderProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export const Header = ({ onSignInClick, onSignUpClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CommuteX
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onSignInClick}>
            Sign In
          </Button>
          <Button onClick={onSignUpClick} className="shadow-glow">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
