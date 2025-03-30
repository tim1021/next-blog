import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'

export default function LatestPosts() {
  const latestPosts = getBlogPosts()

  return (
    <>
      <h1>Recently Published</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1 // a 在 b 前面
          }
          if (
            new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt)
          ) {
            return 1 // b 在 a 前面
          }
          return 0 // 相等，不做排序
        })
        .map((post) => (
          <article key={post.slug} className="text-wrap max-w-md my-10">
            <Link href={'#'}>
              <h3 className='font-bold py-2 leading-5 hover:text-blue-400'> {post.metadata.title}</h3>
            </Link>
            <p className='leading-8 my-5'>{post.metadata.summary}</p>
            <p className='text-sm '>{formatDate (post.metadata.publishedAt)}</p>
          </article>
        ))}
    </>
  )
}
