import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { getProjectsForHome } from "@/utils/services/project";

export default async function PostsPage() {
  const projects = await getProjectsForHome();
  return (
    <main className="container mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold mb-8">My projects</h1>
      <ul className="flex flex-col gap-y-6">
        {projects.map((project) => (
          <li key={project._id}>
            <Link href={`/projects/${project.slug.current}`}>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            </Link>
            <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("es-ES", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(project.completionDate))}
            </p>
            <div className="flex">
              <div>
                <PortableText value={project.body} />
              </div>

              <div className="flex justify-center items-center min-w-[300px]">
                <Image
                  src={project.images[0].asset.url}
                  alt="Project image"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  layout="responsive"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
