fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=BtNFCIFuXoo8O8q0Fgotg0yDqWryKGCC')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data.response.docs[0].headline.main)
  })
  .catch(err => {

  })
