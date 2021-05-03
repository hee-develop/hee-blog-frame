import { GetStaticPaths, GetStaticProps } from 'next';
import { convertMarkdownToHtml } from '../../lib/markdownConverter';
import { getAllPostData } from '../../lib/postLoader';
import { Layout } from '../../components/Layout';

export const getStaticPaths: GetStaticPaths = async function() {
  const postData = getAllPostData();

  return {
    paths: postData.map(data => ({ params: { id: data.fileName }})),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async function({ params: { id }}) {
  const post = getAllPostData().find(({ fileName }) =>  fileName === id);
  const convertedContent = await convertMarkdownToHtml(post.content);

  return {
    props: {
      content: convertedContent,
      data: post.data,
    },
  };
}

export default function Post({content, data}) {
  return (
    <Layout meta={{}}>
      <h1>{data.title}</h1>
      <article dangerouslySetInnerHTML={{__html: content}} />
    </Layout>
  );
}
