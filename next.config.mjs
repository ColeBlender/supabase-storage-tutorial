/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "higssmppvjoqahjxesne.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
