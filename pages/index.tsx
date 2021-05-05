import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { PostCard } from '../components/PostCard';
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
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          writtenIn={post.date}
          sample={post.content.slice(0, 100)}
        />
      ))}
    </Layout>
  )
}
