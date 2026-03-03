import { Link } from "react-router-dom";
import PublicImageSlider from "@/components/PublicImageSlider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  FlaskConical,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="relative bg-zinc-900 border-b border-zinc-700/50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Discover the right path for you
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl">
                Start your Tasman journey. Explore degrees, research, and
                opportunities that match your goals.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-zinc-900 hover:bg-zinc-800 hover:text-white border-zinc-600 text-md"
                >
                  <Link to="/courses">Explore courses</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-zinc-600 text-zinc-900 hover:bg-zinc-800 hover:text-white text-md"
                >
                  <Link to="/register">Apply now</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-start">
              <PublicImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Explore study options */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Explore your study options
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Whether you're starting undergraduate study, advancing with
          postgraduate, or joining from overseas — find your path.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              to: "/courses",
              label: "Undergraduate",
              desc: "Admission pathways, calendar, double degrees, how to apply",
              icon: BookOpen,
            },
            {
              to: "/courses",
              label: "Postgraduate",
              desc: "Entry requirements, financing, types of study, how to apply",
              icon: GraduationCap,
            },
            {
              to: "/department",
              label: "Faculties",
              desc: "Our faculties and schools, campus life, support",
              icon: Building2,
            },
            {
              to: "/courses",
              label: "Research",
              desc: "Find a supervisor, scholarships, application process",
              icon: FlaskConical,
            },
          ].map((item) => (
            <Link key={item.label} to={item.to}>
              <Card className="h-full bg-zinc-800/80 border-zinc-700 text-zinc-100 transition-colors hover:bg-zinc-800 hover:border-zinc-600">
                <CardHeader className="pb-2">
                  <item.icon className="h-6 w-6 text-zinc-400 mb-1" />
                  <CardTitle className="text-base font-medium text-white">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-zinc-400 text-xs leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link
            to="/courses"
            className="text-zinc-400 hover:text-white underline-offset-4 hover:underline"
          >
            Scholarships and awards
          </Link>
          <Link
            to="/courses"
            className="text-zinc-400 hover:text-white underline-offset-4 hover:underline"
          >
            Fees and costs
          </Link>
          <Link
            to="/courses"
            className="text-zinc-400 hover:text-white underline-offset-4 hover:underline"
          >
            Flexible learning
          </Link>
        </div>
      </section>

      {/* Stats / rankings strip */}
      <section className="bg-zinc-800/60 border-y border-zinc-700/50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-zinc-600">
            <div className="text-center sm:flex-1 sm:px-8">
              <p className="text-2xl font-semibold text-white">Top 20</p>
              <p className="text-sm text-zinc-400 mt-1">globally ranked</p>
            </div>
            <div className="text-center sm:flex-1 sm:px-8">
              <p className="text-2xl font-semibold text-white">#1</p>
              <p className="text-sm text-zinc-400 mt-1">employability focus</p>
            </div>
            <div className="text-center sm:flex-1 sm:px-8">
              <p className="text-2xl font-semibold text-white">Leading</p>
              <p className="text-sm text-zinc-400 mt-1">
                research & industry links
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision - Progress for All style */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-xl bg-zinc-800/80 border border-zinc-700 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Progress for All
          </h2>
          <p className="text-zinc-400 max-w-3xl leading-relaxed">
            Tasman is dedicated to driving progress for all. Our vision is
            ambitious: to address pressing challenges and drive positive change
            through transformative education, innovative research, and
            meaningful engagement. Discover how we're changing lives.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="border-zinc-600 text-zinc-950 hover:bg-zinc-600"
            >
              <Link to="/courses">
                Read impact stories <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-zinc-700"
            >
              <Link to="/department">View our strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key dates */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-xl font-semibold text-white mb-6">Key dates</h2>
        <div className="flex flex-col gap-3">
          {[
            { date: "Wed 4 Mar", tag: "SUMMIT", title: "Implications of AI" },
            { date: "Thu 5 Mar", tag: "EVENT", title: "Build, Grow and Lead" },
            {
              date: "Tue 10 Mar",
              tag: "LEADERSHIP",
              title: "From strength to impact",
            },
          ].map((event) => (
            <Link
              key={event.date + event.title}
              to="/courses"
              className="flex flex-wrap items-center gap-4 rounded-lg border border-zinc-700/80 bg-zinc-800/50 px-4 py-3 transition-colors hover:bg-zinc-800 hover:border-zinc-600"
            >
              <span className="text-zinc-500 text-sm font-medium w-24 shrink-0">
                {event.date}
              </span>
              <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                {event.tag}
              </span>
              <span className="text-zinc-200 font-medium">{event.title}</span>
              <span className="ml-auto text-zinc-500 text-sm">Learn more</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Research & Experience - two card sections */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Excellent research, translated
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Find a researcher",
              desc: "Connect with subject matter experts and supervisors.",
              icon: FlaskConical,
            },
            {
              title: "Research partnerships",
              desc: "We work with business and government on innovation.",
              icon: Sparkles,
            },
            {
              title: "Facilities & infrastructure",
              desc: "Access labs and instruments with technical support.",
              icon: Building2,
            },
            {
              title: "Higher degree research",
              desc: "Explore supervisors, scholarships, and costs.",
              icon: GraduationCap,
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-zinc-800/80 border-zinc-700 hover:border-zinc-600 transition-colors"
            >
              <CardHeader className="pb-2">
                <item.icon className="h-5 w-5 text-zinc-400 mb-1" />
                <CardTitle className="text-sm font-medium text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-zinc-400 text-xs">
                  {item.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Experience Tasman
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Do uni your way",
              desc: "Shape your experience on campus.",
            },
            {
              title: "Student life",
              desc: "Stay connected with the community.",
            },
            {
              title: "Respect and diversity",
              desc: "We celebrate all backgrounds.",
            },
            { title: "Our campuses", desc: "Learn about our locations." },
          ].map((item) => (
            <Link key={item.title} to="/department">
              <Card className="h-full bg-zinc-800/80 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-zinc-400 text-xs">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/80">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Explore a lifetime of learning
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl">
            Everything you need to know about Tasman's academic calendar and
            programs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-zinc-100 text-zinc-900 transition-transform duration-200 shadow-sm hover:scale-x-105 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]"
            >
              <Link to="/courses">Find your degree</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-zinc-100 text-zinc-900 transition-transform duration-200 shadow-sm hover:scale-x-105 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]"
            >
              <Link to="/courses">Enquire now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-zinc-100 text-zinc-900 transition-transform duration-200 shadow-sm hover:scale-x-105 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]"
            >
              <Link to="/register">Apply now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">Tasman · Progress for All</p>
          <div className="flex gap-6 text-sm">
            <Link to="/courses" className="text-zinc-500 hover:text-zinc-300">
              Contact us
            </Link>
            <Link
              to="/department"
              className="text-zinc-500 hover:text-zinc-300"
            >
              About us
            </Link>
            <Link to="/courses" className="text-zinc-500 hover:text-zinc-300">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
