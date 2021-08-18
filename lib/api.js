async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
          width
          height
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `
)
  return data?.posts
}

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
        width
        height
      }
      coverImage {
        url
        width
        height
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
        width
        height
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
        where_ne: {
          slug_ne: slug,
        },
      },
    }
  )
  return data
}

export async function getBanners() {
  const data = await fetchAPI(
    `
    query Banners($where: JSON){
      banners(sort: "created_at:desc", limit: 8, where: $where) {
        title
        link
        image{
          formats
        }
        created_at
      }
    }
  `
)
  return data && data.banners
}

export async function getStores() {
  const data = await fetchAPI(
    `
    query Stores($where: JSON){
      stores(sort: "created_at:desc", limit: 20, where: $where) {
        name
        description
        popular
        slug
        image{
          formats
        }
        store_category{
          id
          name
        }
        created_at
      }
    }
  `
)
  return data && data.stores
}

export async function getCategoryStoreReady() {
  const data = await fetchAPI(
    `
    query {
      storeCategories{
        name
        stores{
          name
        }
      }
    }
  `
)
  return data && data.storeCategories
}

export async function getStoreDetail(slugSet) {
  const data = await fetchAPI(
    `query StoreDetail($where: JSON) {
      stores(where: $where) {
        name
        slug
        telp
      }
    }`,
    {
      variables: {
        where: {
          slug: slugSet,
        },
      },
    }
  )
  return data && data.stores[0]
}
