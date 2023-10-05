import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata({ params })
{
 const fetchData=await fetch(`https://dummyjson.com/products/${params.slug}`,{ next: { revalidate: 60 }});
 const res=await fetchData.json();

  if (!res) {
      return {
          title: "Product Not Found",
          description:"The page you are looking for does  not found"
      }
  }

  return {
      title: res.title +"| Next",
      description: `This is the page of ${res.description}`,
      alternates: {
        canonical: `/productlist/${params.slug}`,
          languages: {
        "en-US": `en-US/productlist/${params.slug}`,
        'de-DE': `/de-DE/productlist/${params.slug}`,
        },
        media: {
          'only screen and (max-width: 600px)': `/productlist/${params.slug}`,
        },
      },
     robots:{
      index:false,
      follow:false,
      nocache:true,
     }
  }

}
export default async function Page({ params })
 {
  const fetchData=await fetch(`https://dummyjson.com/products/${params.slug}`,{ next: { revalidate: 60 }});
  const res=await fetchData.json();
  return (
    <div className="mx-3 my-3">
     <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>{res.title}
        </Typography>
        <Typography variant="h4" component="div">
        <p><Image src={res.thumbnail} height={100} width={100} alt="thumbnai"/></p>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        product price:-{res.price}
        </Typography>
        <Typography variant="body1">
        {res.description}
          <br />
         {res.rating}
        </Typography>
      </CardContent>
     </Card>
     <CardActions>
        <Button size="small"><Link href="/productlist" className="styles.link">Go to Product List</Link></Button>
      </CardActions>
      
    </div>
  )
}