import * as React from 'react';
import Layout from '../components/Layout';

import profileImage from '../images/profile.gif';

export default function About() {
  return (
    <Layout pageTitle="About">
      <img src={profileImage} />
      <span>안녕하세요</span>
    </Layout>
  )
}
