import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MarTech Agency - Our Story & Mission",
  description: "Learn about MarTech Agency's vision, mission, values, and the team behind innovative technology and marketing solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
