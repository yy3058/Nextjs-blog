import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

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

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
