import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Placeholder: replace with real data from your API */
const MOCK_DEPARTMENTS = [
  { id: "1", name: "Arts, Design & Architecture", description: "Through creativity, collaboration and inclusion we seek and solve problems to improve life on earth." },
  { id: "2", name: "Business School", description: "We tackle the biggest economic, business and social challenges with partners around the world." },
  { id: "3", name: "Engineering", description: "Challenge yourself at a globally-recognised engineering faculty, where different perspectives spark more human solutions." },
  { id: "4", name: "Law & Justice", description: "We are a leader in legal education in Australia, committed to social justice and human rights." },
  { id: "5", name: "Medicine & Health", description: "World-class education across five schools, partnered with teaching hospitals and campuses across NSW." },
  { id: "6", name: "Science", description: "We rank in the world's top 50 for natural and life sciences and biomedicine." },
];

function DepartmentCard({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  return (
    <Link to={`/department/${id}`} className="group block overflow-hidden rounded-md shadow-lg">
      {/* Card with background image placeholder */}
      <div className="relative min-h-[200px] overflow-hidden rounded-md border border-zinc-700 bg-zinc-800">
        {/* Background: set backgroundImage to your image; placeholder shown until then */}
        <div className="absolute inset-0 bg-zinc-700 bg-cover bg-center bg-no-repeat">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-zinc-500">Image placeholder</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-900/50 to-transparent" />
        <div className="relative flex min-h-[200px] flex-col justify-end p-5">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-300">{description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-200 group-hover:text-white">
            Learn more
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

const Departments = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="border-b border-zinc-800 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Our faculties & schools
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Advancing knowledge and innovation for a better world.
          </p>
          <p className="mt-4 max-w-3xl text-zinc-500">
            Our faculties and schools are distinctively known for their
            multi-disciplinary approach to research and learning.
          </p>
        </div>
      </section>

      {/* Department cards grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {MOCK_DEPARTMENTS.map((d) => (
            <DepartmentCard
              key={d.id}
              id={d.id}
              name={d.name}
              description={d.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Departments;
