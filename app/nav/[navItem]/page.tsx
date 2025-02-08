import { redirect } from "next/navigation";
import { menuItems } from "../../data/main";

export default function NavPage({ params }: { params: { navItem: string } }) {
  const activeNav = menuItems.find((item) => item.path === params.navItem);

  if (!activeNav) return <p>Nav item not found</p>;

  // Redirect to the first subnav item
  redirect(`/nav/${params.navItem}/${activeNav.subNav[0].path}`);
}
