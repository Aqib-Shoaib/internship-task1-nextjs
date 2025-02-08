import Main from "@/app/components/layout/Main";

export default async function SubnavPage({
  params,
}: {
  params: Promise<{ navItem: string; subNavItem: string }>;
}) {
  const { navItem, subNavItem } = (await params) ?? {};

  return (
    <main>
      {navItem === "settings" && subNavItem === "staff" ? (
        <Main />
      ) : (
        <>
          <h1>
            {navItem} - {subNavItem}
          </h1>
          <p>This is the subnav content for {subNavItem}.</p>
        </>
      )}
    </main>
  );
}
