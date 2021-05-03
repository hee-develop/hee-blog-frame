import NextHead from 'next/head';

export default function Head({ title, meta }) {
  const headTitle = title || 'hee dev blog';

  return (
    <NextHead>
      <title>{headTitle}</title>
    </NextHead>
  );
}

