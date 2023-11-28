// Add your custom JavaScript for storefront pages here.
if (window.location.pathname === '/promocao') {
    const timestamp = Date.now()
    EcomSearch.dslMiddlewares.push((dsl) => {
      dsl.query.bool.filter.push({
        script: {
          script: {
            lang: 'painless',
            source: "doc['price'].value > 0 && doc['base_price'].value > 0" +
              " && (doc['price_effective_date.start'].empty || " +
                `doc['price_effective_date.start'].date.millis <= ${timestamp}L)` +
              " && (doc['price_effective_date.end'].empty || " +
                `doc['price_effective_date.end'].date.millis >= ${timestamp}L)` +
              " ? doc['base_price'].value > doc['price'].value : false"
          }
        }
      })
    })
  }