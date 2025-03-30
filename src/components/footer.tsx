import { Icons } from './icon'
import { categories } from '@/lib/placeholder-data'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap8 md:grid-cols-4">
          <div className="space-y-4">
            <div className=" flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">SideKickTruck</span>
            </div>
            <p className="text-sm">
              stay up with the latest news and insights from my blog
            </p>
            <div className=" flex space-x-2">
              <Icons.twitter className=" h-6 w-6" />
              <Icons.gitHub className="h-6 w-6" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="text-sm">
              {categories.map((post) => (
                <li key={post}>{post}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-sm">
              subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action="">
              <div className=' flex space-x-2'>
                <Input type="email" placeholder="Enter your email" className='flex-1' />
                <Button>Subscribe</Button>
                {/* <SubmitButton/> */}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2025 SideKickTruck. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
