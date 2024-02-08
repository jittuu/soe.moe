import { redirect } from "next/navigation";

export const metadata = {
  title: "Soe Moe's Blog",
};

export default async function BlogPage() {
  redirect("/blog");
}
