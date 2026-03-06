import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search } from "lucide-react";

/* Placeholder: replace with real data from your API */
const MOCK_COURSES = [
  {
    id: "1",
    course_title: "Computer Science",
    course_code: "COMP",
    fee: "—",
    department: "Engineering",
  },
  {
    id: "2",
    course_title: "Commerce",
    course_code: "COMM",
    fee: "—",
    department: "Business",
  },
  {
    id: "3",
    course_title: "Medicine",
    course_code: "MED",
    fee: "—",
    department: "Health",
  },
];

function CourseCard({
  id,
  course_title,
  course_code,
  fee,
  department,
}: {
  id: string;
  course_title: string;
  course_code: string;
  fee: string;
  department: string;
}) {
  return (
    <Link to={`/courses/${id}`}>
      <div className="rounded-md border border-zinc-700 bg-zinc-800/90 p-4 shadow-lg transition-colors hover:border-zinc-600 hover:bg-zinc-800">
        <h3 className="font-medium text-white">{course_title}</h3>
        <p className="mt-1 text-sm text-zinc-400">
          {course_code} · {department}
        </p>
        <p className="mt-2 text-sm text-zinc-500">Fee: {fee}</p>
      </div>
    </Link>
  );
}

const Courses = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 pb-24 pt-10 text-zinc-100">
      {/* Hero: title + search */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mb-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-10 shadow-lg">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 text-center">
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              Discover the right course for you
            </h1>
            <div className="relative w-full max-w-xl md:max-w-2xl">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search by keyword or course code…"
                className="h-12 rounded-full border-zinc-700 bg-zinc-800/80 pl-11 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-zinc-500"
                aria-label="Search degrees"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main: sidebar (1/3) + results (2/3) */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8 md:flex-row">
        {/* Left: filters & pagination — ~1/3 */}
        <aside className="w-full shrink-0 space-y-6 md:w-1/3">
          <div>
            <div className="flex items-center justify-between gap-4 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2">
              <Label
                htmlFor="switch-international"
                className="text-sm text-zinc-300"
              >
                International
              </Label>
              <Switch id="switch-international" />
            </div>
            <Label className="mt-6 text-zinc-400">Sort by</Label>
            {/* <Select>
              <SelectTrigger className="mt-1.5 w-full border-zinc-600 bg-zinc-800/80 text-zinc-200">
                <SelectValue placeholder="Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="code">Code</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select> */}
            <Select>
              <SelectTrigger className="mt-1.5 bg-zinc-800/80 border-zinc-500 focus:ring-0 w-full">
                <SelectValue placeholder="Title" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-700 border-zinc-500 text-white">
                <SelectGroup>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="code">Code</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-zinc-400">Filters</Label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
              <Checkbox /> Undergraduate
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
              <Checkbox /> Postgraduate
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
              <Checkbox /> Full-time
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
              <Checkbox /> Part-time
            </label>
          </div>

          <button className="text-zinc-400 cursor-pointer"> Clear all</button>
        </aside>

        {/* Right: course cards — ~2/3 */}
        <div className="min-w-0 flex-1">
          <p className="mb-4 text-sm text-zinc-500">Degree search results</p>
          <div className="grid gap-4 sm:grid-cols-1">
            {MOCK_COURSES.map((c) => (
              <CourseCard
                key={c.id}
                id={c.id}
                course_title={c.course_title}
                course_code={c.course_code}
                fee={c.fee}
                department={c.department}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10">
        {/* <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-4 shadow-lg"> */}
        <Pagination className="justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Courses;
