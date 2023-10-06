/** @type {import('next').NextConfig} */
    const nextConfig = {
        images:{
            domains:['i.dummyjson.com','api.slingacademy.com'],
        },
        env: {
            SERVER: process.env.SERVER,
          },
    }
module.exports=nextConfig
