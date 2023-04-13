import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-util';
import Head from 'next/head';
// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'getting-started-with-NEXTjs',
//     image: 'getting-started-with-nextjs.png',
//     excerpt: 'nextjs is a react frameworkd production',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs2',
//     title: 'getting-started-with-NEXTjs',
//     image: 'getting-started-with-nextjs.png',
//     excerpt: 'nextjs is a react frameworkd production',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs3',
//     title: 'getting-started-with-NEXTjs',
//     image: 'getting-started-with-nextjs.png',
//     excerpt: 'nextjs is a react frameworkd production',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs4',
//     title: 'getting-started-with-NEXTjs',
//     image: 'getting-started-with-nextjs.png',
//     excerpt: 'nextjs is a react frameworkd production',
//     date: '2022-02-10',
//   },
// ];

function HomePage(props) {
  return (
    <>
      <Head>
        <title>YuYu' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
