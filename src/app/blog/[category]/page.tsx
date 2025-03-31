import Header from '@/components/Header'
import { getBlogPosts } from '../utils'
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function Page({ params }: PageProps) {
  // 等待 params 异步返回的值
  const { category } = await params;

  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === category
  );

  // 如果没有找到相关的文章，显示 404 页面
  if (posts.length === 0) {
    notFound();
    return null;
  }

  return (
    <>
      <Header>
        <h1>{category}</h1>
      </Header>
      {/* 渲染文章内容 */}
    </>
  );
}
