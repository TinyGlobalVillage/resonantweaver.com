import { notFound } from "next/navigation";
import { allWritings } from "contentlayer/generated";
import ArticleProse from "@/src/app/_allPageComponents/content-types/ArticleProse";
import WritingContent from "@/src/app/_allPageComponents/content-types//WritingContent";

export async function generateStaticParams() {
  return allWritings.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allWritings.find(p => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function WritingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allWritings.find(p => p.slug === slug);
  if (!post) return notFound();

  return (
    <ArticleProse as="article">
      <h1>{post.title}</h1>
      <WritingContent code={post.body.code} /> {/* client boundary */}
    </ArticleProse>
  );
}
