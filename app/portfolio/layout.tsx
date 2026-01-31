import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Best Work & Case Studies",
  description: "Explore MarTech Agency's successful projects, case studies, and the results we've achieved for our clients across web development, apps, and digital marketing.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
