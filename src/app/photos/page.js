import React from 'react'
import Link from 'next/link';
import { Grid, List, ListItem } from '@mui/material';
import Image from 'next/image';
export const metadata={
title:'Image Gallary',
openGraph: {
  title: 'Image ',
  description: 'Image Gallary is a...',

},
}
export default async function Products() {
    const fetchData=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/`);
    const res=await fetchData.json();
    console.log(res);
  return (
    <div>
    
            <h3>Image List</h3>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {res?.photos?.map((item)=>{
                
                return(
                <Grid item xs={6} key={item.id}>
                <Image
                src={item.url}
                alt='user profile picture'
                height={200} width={300}/>
                {item.title}
                </Grid>
                )
            })}   
            
            </Grid>
    </div>
  )
}