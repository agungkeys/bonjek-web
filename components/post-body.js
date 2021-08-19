export default function PostBody({ content }) {
  return (
    <div className="markdown max-h-10 md:max-h-20 lg:max-h-24 overflow-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
