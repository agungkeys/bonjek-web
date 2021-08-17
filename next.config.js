module.exports = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  publicRuntimeConfig: {
    API: process.env.BASE_API,
    ENV: process.env.BASE_ENV,
    HOST: process.env.BASE_HOST,
  },
}
