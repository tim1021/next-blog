import Header from '@/components/Header'
import { getBlogPosts } from '../utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CardCategory from '@/components/CardCategory'
import Container from '@/components/Container'

export default function Page({ params }: { params: { category: string } }) {
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  )

  if (!posts.length) {
    notFound()
  }
  return (
    <>
      <Header>
        <Container>
          {' '}
          <h1>{posts[0]?.metadata.category}</h1>
        </Container>
      </Header>
      <Container>
        {' '}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap4 mx-10 my-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1
              }
              return 1
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  )
}
