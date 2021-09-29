module.exports = {
  images: {
    domains: ['ipfs.blockfrost.dev'],
  },
  env: {
    SERVER_URL: process.env.NODE_ENV === "development" ? "http://localhost:3000/": "https://stale-foal.vercel.app/",
    // SERVER_URL: "http://localhost:3000/",
    },
}