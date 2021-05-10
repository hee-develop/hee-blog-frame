import { GetStaticPaths, GetStaticProps } from 'next';
import { convertMarkdownToHtml } from '../../lib/markdownConverter';
import { getAllPostData } from '../../lib/postLoader';
import { Layout } from '../../components/Layout';
import PostTitle from '../../components/posts/PostTitle';
import styled from 'styled-components';

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

const PostLayout = styled.div`
  display: flex;
`;

const ArticleLayout = styled.article`
  padding: 0 1.2em;
`;

const SidebarLayout = styled.aside`
  min-width: 20%;
`;

export default function Post({content, data}) {
  return (
    <Layout meta={{}}>
      <PostLayout>
        <ArticleLayout>
          <PostTitle title={data.title} date={data.date} />
          <div dangerouslySetInnerHTML={{__html: content}} />
        </ArticleLayout>
        <SidebarLayout></SidebarLayout>
      </PostLayout>
    </Layout>
  );
}
