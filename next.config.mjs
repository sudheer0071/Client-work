/** @type {import('next').NextConfig} */
const nextConfig = {
 images:{
  remotePatterns:[{
    protocol: 'https',
    hostname: 'futcoinshop.com',
    port: '', 
  }]
 }
};

export default nextConfig;
