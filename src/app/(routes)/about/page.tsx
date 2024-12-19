import { PortableText } from "next-sanity";
import SocialNetwork from "@/components/shared/SocialNetwork";
import { getAboutMe } from "@/utils/services/page";

export default async function PostsPage() {
  const page = await getAboutMe();
  return (
    <main className="container mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Hola, soy Ericka</h1>
      <div className="space-y-4">
        <PortableText value={page.body} />
      </div>
      <SocialNetwork className="flex justify-end mt-16" />
    </main>
  );
}
