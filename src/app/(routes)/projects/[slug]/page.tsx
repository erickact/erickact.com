import { PortableText } from "next-sanity";
import { getProjectBySlug } from "@/utils/services/project";
import Link from "next/link";
import ImageCarousel from "@/components/primitives/ImageCarousel";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return (
    <div className="container mx-auto max-w-3xl p-8">
      <div className="mb-4">
        <Link href="/projects" className="hover:underline">
          ← Back to projects
        </Link>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold my-1">{project.title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {new Intl.DateTimeFormat("es-ES", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).format(new Date(project.completionDate))}
      </p>
      <PortableText value={project.body} />
      <div className="my-4">
        <h3 className="text-xl mt-2">Technologies</h3>
        <PortableText value={project.technologies} />
      </div>
      <ImageCarousel images={project.images} />
    </div>
  );
}
