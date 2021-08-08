var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=BtNFCIFuXoo8O8q0Fgotg0yDqWryKGCC'

function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var articles = data.response.docs;

  //Loop to get all results from articlesearch
  for (var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph);
    createP(articles[i].web_url);
  }
}
