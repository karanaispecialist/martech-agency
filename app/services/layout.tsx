import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Web Development, App Development & Digital Marketing",
  description: "Comprehensive technology and marketing services including Web Development, Mobile Apps, UI/UX Design, SEO, Google Ads, Meta Ads, Data Analytics & CRM Solutions.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
