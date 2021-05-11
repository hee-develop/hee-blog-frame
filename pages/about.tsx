import { Layout } from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <Image
        width={200}
        height={200}
        src="/profile.gif"
        objectFit="contain"
      />
    </Layout>
  )
}
