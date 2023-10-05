import { ImageResponse } from 'next/server'
export const runtime = 'edge'
 
export const alt = 'Product'
export const size = {
  width: 500,
  height: 300,
}
export const contentType = 'image/png'
 
export default async function Image({ params }) {
  const post = await fetch(`https://dummyjson.com/products/${params.slug}`).then((res) =>
    res.json()
  )
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       <img src= {post.thumbnail} alt={post.title}/>
      </div>
    ),
    {
      ...size,
    }
  )
}