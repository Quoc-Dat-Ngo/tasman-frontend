import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Course = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Breadcrumb / back */}
        <nav className="mb-6 text-sm text-zinc-400">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to degree search
          </Link>
        </nav>

        {/* Card: 2/3 width, shadow-lg, rounded-md */}
        <div className="w-full max-w-[66.666%] rounded-md bg-zinc-800/90 border border-zinc-700 shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            {/* Course title */}
            <h1 className="text-2xl font-semibold text-white md:text-3xl">
              Course title
            </h1>

            {/* Course code + department row */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-zinc-400">Course code</span>
              <span className="text-zinc-300">—</span>
              <span className="text-zinc-400">Department</span>
            </div>

            {/* Fee */}
            <div className="pt-2 border-t border-zinc-700">
              <p className="text-zinc-400 text-sm">Fee</p>
              <p className="text-white font-medium mt-0.5">$0</p>
            </div>

            {/* Meta: created / updated */}
            <div className="flex flex-wrap gap-6 text-xs text-zinc-500 pt-2 border-t border-zinc-700">
              <span>Created: —</span>
              <span>Updated: —</span>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border-0"
              >
                <Link to="/courses">Apply or enquire</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Optional: ID for dev (you can remove when wiring API) */}
        {id && <p className="mt-4 text-xs text-zinc-600">Course ID: {id}</p>}
      </div>
    </div>
  );
};

export default Course;
