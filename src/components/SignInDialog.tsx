import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignInDialog = ({ open, onOpenChange }: SignInDialogProps) => {
  const [formData, setFormData] = useState({
    substationId: "",
    userId: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    toast.success("Sign in successful!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sign In</DialogTitle>
          <DialogDescription>
            Access your CommuteX distribution board dashboard
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="substationId">Substation ID</Label>
            <Input
              id="substationId"
              placeholder="Enter substation ID"
              value={formData.substationId}
              onChange={(e) =>
                setFormData({ ...formData, substationId: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="userId">User ID</Label>
            <Input
              id="userId"
              placeholder="Enter user ID"
              value={formData.userId}
              onChange={(e) =>
                setFormData({ ...formData, userId: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" className="w-full shadow-glow">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
