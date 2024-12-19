import Link from "next/link";
import { getProjectsForHome } from "@/utils/services/project";

export default async function PostsPage() {
  const projects = await getProjectsForHome();
  return (
    <main className="container mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">My projects</h1>
      <ul className="flex flex-col gap-y-6">
        {projects.map((project) => (
          <li key={project._id}>
            <Link href={`/projects/${project.slug.current}`}>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("es-ES", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(project.completionDate))}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
