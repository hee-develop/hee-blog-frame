import Head from "./Head";

export function Layout({ children, meta }) {
  return (
    <>
      <Head title={''} meta={{}} />

      <main>{children}</main>
    </>
  );
}

