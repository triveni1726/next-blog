import React from 'react'
import Link from 'next/link';
import { List, ListItem } from '@mui/material';
export const metadata={
title:'products',
}
export default async function Products() {
    const fetchData=await fetch(`https://dummyjson.com/products/`);
    const res=await fetchData.json();
  return (
    <div>
    
            <h3>Product List</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {res?.products?.map((item)=>{
                
                return(
                <ListItem key={item.id}>
                    <Link href={`/productlist/${item.id}`}>{item.title}</Link>
                </ListItem>
                )
            })}   
            </List>
    </div>
  )
}