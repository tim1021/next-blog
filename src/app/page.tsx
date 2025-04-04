import LatestPosts from '@/components/home/latest-posts'
import TopCategories from '@/components/home/top-categories'
import PopularPosts from '@/components/home/popular-posts'

import { MainNav } from '@/components/ui/main-nav'
import Container from '@/components/Container'

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">Top Categroy</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">Popular Posts</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  )
}
