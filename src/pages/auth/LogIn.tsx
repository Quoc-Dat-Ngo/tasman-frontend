import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TasmanLogo from "@/components/TasmanLogo";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <Card className=" bg-zinc-700 shadow-lg text-white">
          <div className="flex flex-col items-center space-y-4 mb-2">
            <div className="flex items-center">
              <TasmanLogo className="h-20 w-auto" />
              <span className="text-white italic text-5xl tracking-tight -ml-3">
                Tasman
              </span>
            </div>
            <p className="text-lg text-zinc-400 text-center -mt-8">
              Where education meets technology
            </p>
          </div>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-semibold">
              Log in to your account
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Only internal personnels have access to this resource
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 "
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    Forgot?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-2 bg-white text-zinc-900 cursor-pointer hover:bg-neutral-200 rounded-full py-5"
              >
                Sign in
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center text-md">
            <p className="text-sm text-zinc-100">
              Don’t have an account?{" "}
              <span className="hover:underline cursor-pointer text-sky-300">
                <Link to="/register" className="">
                  Sign up
                </Link>
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
