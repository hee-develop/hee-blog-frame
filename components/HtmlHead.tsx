import NextHead from 'next/head';

export function HtmlHead({ title, meta }) {
  const headTitle = title || 'hee dev blog';

  return (
    <NextHead>
      <title>{headTitle}</title>
    </NextHead>
  );
}

