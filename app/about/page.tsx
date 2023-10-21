import type { Metadata } from "next";
import Heading from "@/components/Heading";

export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>

      <p>About how to learn Next.js.</p>
    </>
  );
}
