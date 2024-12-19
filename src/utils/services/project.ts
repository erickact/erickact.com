import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PROJECT_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(completionDate desc)[0...3]{
  title,
  body,
  _id,
  slug,
  completionDate,
  images[]{
    asset -> { _id, url }
  },
  "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "..."
}`;

const ALL_PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(completionDate desc){
  title,
  _id,
  slug,
  completionDate,
  images[]{
    asset -> { _id, url }
  }
}`;

const PROJECT_BY_SLUG_QUERY = `*[
  _type == "project"
  && slug.current == $slug
][0]{
  title,
  body,
  completionDate,
  images[]{
    asset -> { _id, url }
  }
}`;

const options = { next: { revalidate: 30 } };

export async function getProjectsForHome() {
  return await client.fetch<SanityDocument[]>(PROJECT_QUERY, {}, options);
}

export async function getAllProjects() {
  return await client.fetch<SanityDocument[]>(ALL_PROJECTS_QUERY);
}

export async function getProjectBySlug(slug: string) {
  return await client.fetch<SanityDocument>(PROJECT_BY_SLUG_QUERY, { slug });
}
