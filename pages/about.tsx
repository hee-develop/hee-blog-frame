import { Layout } from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <img
        width={200}
        height={200}
        src="/profile.gif"
        style={{objectFit: "contain"}}
      />
    </Layout>
  )
}
