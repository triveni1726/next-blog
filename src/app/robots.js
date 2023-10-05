import { userAgent } from "next/server";

export default function robots() {
  return {
    rules: [
      {
      userAgent: 'Googlebot',
      allow: '/$',
      disallow:[ '/_next/', '/icon.js/',]
      },
      // Allow all web crawlers to access all parts of your website
      {
        userAgent: '*',
        allow:'/',
      },
      {
      userAgent:'Bingbot',
      disallow:'/components/'
    }],
    
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}