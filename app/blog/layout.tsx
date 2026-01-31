import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Tech & Marketing Insights by MarTech Agency",
  description: "Read the latest insights on web development, app development, digital marketing, SEO, and technology trends from MarTech Agency experts.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
