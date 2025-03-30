import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
//get all the mdx form the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) == '.mdx')
}
//read data from those files
function readMXDFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return matter(rawContent)
}
//render the mdx data and metadata
function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMXDFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata,
      slug,
      content,
    }
  })
}
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'))
}

export function formatDate(date: string, includeRelative = true) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  // 计算毫秒差
  const timeDiff = currentDate.getTime() - targetDate.getTime()
  const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60))

  // 如果小于 24 小时，直接显示小时
  if (hoursAgo < 24) {
    const fullDate = targetDate.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    return includeRelative ? `${fullDate}(${hoursAgo}h ago)` : fullDate
  }

  // Calculate full difference
  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  // Adjust for negative months/days
  if (daysAgo < 0) {
    monthsAgo--
    // Get last day of previous month
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
    daysAgo += lastDayOfMonth
  }

  if (monthsAgo < 0) {
    yearsAgo--
    monthsAgo += 12
  }

  let formattedDate = ''
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
      formattedDate = 'Today'
    }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }
  return `${fullDate}(${formattedDate})`
}
