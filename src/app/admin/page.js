import React from 'react'
export const metadata={
    title:{
    absolute:'admin page',
    },
    robots:{
        noimageindex:true,
        index:false,
        nocache:true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,}
    }
    }
export default function page() {
  return (
    <div>This is admin page</div>
  )
}
