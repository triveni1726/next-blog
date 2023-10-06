import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Page from './profile/page.js';
export const metadata = {
  title:'Home Page',
  alternates: {
    canonical: 'http://localhost:3000/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  keywords: ['Next.js', 'React', 'JavaScript'],//An array of keywords that describe the content or purpose of the web page. 
  openGraph: {
    // images: '/opengraph-image.png',
    title:'Nextjs'
  },
}
export default  function Home() {
 
  console.log(process.env)
  return (<>

    <Box sx={{ display: 'flex' }}>
       <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
        <AlertTitle>Hello 👋</AlertTitle>
        This app uses the Next.js App Router and Material UI v5 to list out Product and Product Details.
      </Alert>
    <Drawer
      sx={{
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
          top: ['48px', '56px', '64px'],
          height: 'auto',
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <List sx={{ px: 2 }}>
        <ListItem disablePadding>
          <Typography variant="overline" sx={{ fontWeight: 500 }}>
            On this page
          </Typography>
        </ListItem>
      </List>
      <Page/>
    </Drawer>
  </Box></>
  )
}
