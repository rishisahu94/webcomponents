class ArticleHeadline extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
      this.article={}
      this.showArticles()
    }
  
  static get observedAttributes() {
      return ['article']
  }
  
  connectedCallback() {
      this.article =JSON.parse(this.getAttribute('article')) || null;
      this.showArticles();
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
      this.article = newVal;
      this.showArticles();
  }
  
    showArticles() {
      const {article}=this
      
      this.root.innerHTML = `
            <style>
           
             h2 {
              font-family: Georgia, 'Times New Roman', Times, serif;
            }
            
             img {
              width: 50%;
            }
            .shadow-con{
              width: 50%;
            }
            </style>
              <h2>${article.title}</h2>
              <p>${article.description}</p>`;
    }
  }
  
  module.export = customElements.define('article-headline', ArticleHeadline);
  