export default function FacebookEmbed({ id }: { id: string }) {
  const fbEmbedUrl = [
    'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdesi2abroad%2Fvideos%2F',
    '%2F&show_text=false&width=560&t=0',
  ]
  return (
    <iframe
      src={fbEmbedUrl[0] + id + fbEmbedUrl[1]}
      width="560"
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      title="Facebook Player"
      className="aspect-video w-full"
    ></iframe>
  )
}
