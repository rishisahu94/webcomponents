#Web Components Demo

**import 'web-component-demo-article';**
<br />
<br />
Provide data in json format
<br />
make sure keys should be same  
<br />
**example**
<br />

``const data = {
    title : "This is title",
    urlToImage:"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",
    description: "This is description"
}``

**article with image**

``<news-article article={JSON.stringify(data)}> </news-article>``

**article without image**

``<article-headline article={JSON.stringify(data)}></article-headline>``

