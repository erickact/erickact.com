import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const PAGE_ABOUT_ME = `*[
    _type == "page"
  ][0]{
    body,
    "excerpt": array::join(string::split(pt::text(body), "")[0..254], "") + "..."
  }`;

const options = { next: { revalidate: 30 } };

export async function getAboutMe() {
  return await client.fetch<SanityDocument>(PAGE_ABOUT_ME, {}, options);
}
