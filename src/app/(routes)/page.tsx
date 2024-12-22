import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import SocialNetwork from "@/components/shared/SocialNetwork";
import { getProjectsForHome } from "@/utils/services/project";
import { getAboutMe } from "@/utils/services/page";

export default async function Home() {
  const projects = await getProjectsForHome();
  const page = await getAboutMe();
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <Image
          src="/assets/profile.jpeg"
          alt="Ericka Castillo"
          width={140}
          height={140}
          className="rounded-full border-4 border-brand-white"
        />
        <div className="flex flex-col gap-6">
          <p className="text-2xl md:text-3xl">
            Hey, I'm Ericka Castillo.{" "}
            <span className="text-brand-gray">
              I'm a Software Engineer building products
            </span>
          </p>
          <SocialNetwork />
        </div>
      </div>
      <div>
        <Link href="/about">
          <h1 className="text-base uppercase font-bold mb-6 tracking-widest">
            ABOUT ME
          </h1>
        </Link>
        <p>{page.excerpt}</p>
        <div className="mt-3 mb-12">
          <Link
            href="/about"
            className="font-semibold hover:underline text-blue-300"
          >
            Read more about me →
          </Link>
        </div>
        <h1 className="text-base uppercase font-bold mb-6 tracking-widest">
          Recent Projects
        </h1>
        <ul className="flex flex-col gap-y-6">
          {projects.map((project) => (
            <li key={project._id} className="flex">
              <div className="">
                <Link href={`/projects/${project.slug.current}`}>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                </Link>
                <p>{project.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <Link
          href="/projects"
          className="font-semibold hover:underline  text-blue-300"
        >
          Read more projects →
        </Link>
      </div>
    </Wrapper>
  );
}
