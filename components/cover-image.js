import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, image, slug }) {
  const imageUrl = `${
    image.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${image.url}`

  const imageComponent = (
    <Image
      width={image.width}
      height={image.height}
      alt={`Cover Image for ${title}`}
      src={imageUrl}
      className='shadow-small hover:shadow-medium transition-shadow duration-200 w-full'
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? 
        <Link href={`/posts/${slug}`}>
          {<a aria-label={title}>{imageComponent}</a>}
        </Link>
        :
        imageComponent
      }
    </div>
  )
}
