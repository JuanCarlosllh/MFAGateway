const { getProducts } = require('../services/products')
const { getsUserFavorites } = require('../services/favorites')

const productResolvers = {
  Query: {
    products: async (
      _,
      { limit, offset, category, orderBy, orderDirection },
      ctx
    ) => {
      const products = await getProducts(
        limit,
        offset,
        category,
        orderBy,
        orderDirection
      )
      const favorites = await getsUserFavorites(ctx.user.id) // This could/should be cached on Redis
      const productsWithFavorites = products.rows.map(product => ({
        ...product,
        isOnFavorites: !!favorites.find(
          favProduct => favProduct.id === product.id
        )
      }))
      return { products: productsWithFavorites, count: products.count }
    }
  }
}

module.exports = { productResolvers }
