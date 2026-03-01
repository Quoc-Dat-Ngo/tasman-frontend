import TasmanLogo from "@/components/TasmanLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-6">
      <div className="w-full max-w-xl space-y-8 my-10">
        {/* Logo + Slogan */}

        {/* Form */}
        <form className="space-y-6 bg-zinc-700 p-6 rounded-lg text-white w-full md-lg">
          <div className="flex flex-col items-center space-y-4 mb-4">
            <div className="flex items-center">
              <TasmanLogo className="h-20 w-auto" />
              <span className="text-white italic text-5xl tracking-tight -mt-l-3">
                Tasman
              </span>
            </div>
            <p className="text-lg text-zinc-400 text-center -mt-8">
              Where education meets technology
            </p>
          </div>
          <FieldSet>
            <FieldLegend className="text-white text-lg">
              Create Account
            </FieldLegend>

            <FieldGroup className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    required
                    className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                  <Input
                    id="lastName"
                    required
                    className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="dob">Date of Birth</FieldLabel>
                <Input
                  id="dob"
                  type="date"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel>Gender</FieldLabel>
                <Select>
                  <SelectTrigger className="bg-zinc-700 border-zinc-500 focus:ring-0">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-700 border-zinc-500 text-white">
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="bg-zinc-700 border-zinc-500 focus-visible:ring-0"
                />
              </Field>

              <Button
                type="submit"
                className="w-full mt-2 bg-white text-md text-zinc-900 cursor-pointer hover:bg-neutral-200 rounded-full py-5"
              >
                Create Account
              </Button>

              <p className="text-sm text-zinc-100 flex justify-center gap-2 -mt-4">
                Have an account?{" "}
                <span className="hover:underline cursor-pointer text-sky-300">
                  <Link to="/log-in">Sign In</Link>
                </span>
              </p>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </div>
  );
};

export default Register;
