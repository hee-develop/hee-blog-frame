import Link from './Link';
import styled from 'styled-components';

type PostSampleProps = {
  id: string;
  title: string;
  writtenIn: string;
  sample?: string;
  thumbnailSrc?: string;
}

const BORDER_RADIUS = '4px';

const Card = styled.div`
  display: flex;
  border-radius: ${BORDER_RADIUS};
  margin: 0.6em 0.4em;
  padding: 0.6em 1em;
  border: 1px solid #DDD;
`;

const Layout = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 4px;
`;

const Sample = styled.p`
  margin-top: 0.6em;
  margin-bottom: 0.2em;
  font-size: 0.9em;
  color: #777;
`;

const WrittenIn = styled.span`
  display: block;
  margin-top: 0.4em;
  font-size: 0.8em;
  color: #AAA;
`;

const Image = styled.img`
  width: 80px;
`;

export function PostCard({ id, title, writtenIn, thumbnailSrc, sample } : PostSampleProps) {
  return (
    <Link href={`/posts/${id}`}>
      <Card>
        <Layout>
          <Title>{title}</Title>
          <Sample>{sample}</Sample>
          <WrittenIn>{writtenIn}</WrittenIn>
        </Layout>
        {thumbnailSrc && <Image src={thumbnailSrc} />}
      </Card>
    </Link>
  );
}
