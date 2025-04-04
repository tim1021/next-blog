import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '../../utils'
import Header from '@/components/Header'
import Container from '@/components/Container'
import { BreadcrumbDemo } from '@/components/Breadcrumb'
import { CustomMDX } from '@/components/mdx'

export default function Page({
  params,
}: {
  params: { categroy: string; slug: string }
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    notFound()
  }
  return (
    <>
      <Header>
        <Container>
          <BreadcrumbDemo
            categroy={post.metadata.categroy}
            slug={post.metadata.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tight mt-4">
            {post.metadata.title}
          </h1>
          <div className=" flex justify-between items-center mt-2 mb-2 text-sm">
            <p>{formatDate(post.metadata.publishedAt)}</p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  )
}
