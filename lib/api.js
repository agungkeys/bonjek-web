async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`, {
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
    query MyQuery {
      banners(orderBy: createdAt_DESC) {
        id
        link
        name
        image {
          url
          width
          height
        }
        createdAt
      }
    }
  `
)
  return data && data.banners
}

export async function getStores() {
  const data = await fetchAPI(
    `
    query Stores {
      stores(orderBy: createdAt_DESC) {
        name
        slug
        telp
        storecategory {
          name
        }
        logo {
          height
          width
          url
          fileName
        }
        district {
          name
          city {
            name
          }
        }
        popular
        description
        createdAt
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
      storeCategories {
        id
        name
        slug
        createdAt
        stores {
          __typename
        }
      }
    }
    `
  )
  return data && data.storeCategories
}

export async function getStoreDetail(slugData) {
  const slug = JSON.stringify(slugData)
  const data = await fetchAPI(
    `
    query MyQuery {
      store(where: {slug: ${slug}}) {
        id
        name
        slug
        logo {
          height
          width
          url
        }
        telp
        updatedAt
        location {
          latitude
          longitude
        }
        district {
          city {
            name
            id
          }
          name
          id
        }
        description
        banner {
          height
          width
          url
        }
        createdAt
        popular
        stage
      }
    }    
    `
  )
  return data && data.store
}
