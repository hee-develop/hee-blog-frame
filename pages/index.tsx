import { GetStaticProps } from 'next';
import Link from 'next/Link';
import { Layout } from '../components/Layout';
import { getAllPostData } from '../lib/postLoader';

type StaticProp = {
  id: string;
  date: string;
  title: string;
  content: string;
}

export const getStaticProps: GetStaticProps = async function() {
  const posts: StaticProp[] = getAllPostData().map(postData => {
    return {
      id: postData.fileName,
      date: postData.date,
      title: postData.title,
      content: postData.content,
    }
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts } : { posts: StaticProp[] }) {
  return (
    <Layout>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <div>{post.content}</div>
          </div>
        )
      })}
    </Layout>
  )
}
