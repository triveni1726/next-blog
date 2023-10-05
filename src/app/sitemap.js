export default async function sitemap() {
  const fetchData=await fetch(`https://dummyjson.com/products`);
    const res=await fetchData.json();
const product=res?.products?.map((item)=>({
  url:`http://localhost:3000/productlist/${item.id}`,
  lastModified:new Date(),
}))
  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'http://localhost:3000/productlist',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'http://localhost:3000/profile',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'http://localhost:3000/photos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...product
    ]
}