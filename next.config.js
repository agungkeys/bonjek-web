module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'media.graphcms.com', 'https://media.graphcms.com'],
  },
  publicRuntimeConfig: {
    API: process.env.BASE_API,
    ENV: process.env.BASE_ENV,
    HOST: process.env.BASE_HOST,
  },
}
