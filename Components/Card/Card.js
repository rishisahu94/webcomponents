// Import the LitElement base class and html helper function
import {
  html,
  LitElement,
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html/directives/unsafe-html.js?module';
// import { LitElement, html } from 'lit-element';
// import {unsafeHTML} from 'https://unpkg.com/lit-html?module';

// Extend the LitElement base class
class CardElement extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() { return {
    cardData: { type: String }
  };}

  constructor() {
    super();
    this.cardData = ''
    // '{"FieldLinkTitle":"Home","ParagraphContent":"<p>This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. This is a summary of the card component. </p>","ShortTitle":"Short title for the second card","Subhead":"Subhead for the second card","Title":"Second Card title","layout":"none","ImageUrl":"http://ezcontent53esqcn36d.devcloud.acquia-sites.com/sites/default/files/2020-05/dubai_15.jpeg","FileObject":[{"type":"file--file","id":"4dfc640c-9545-4ea4-a59c-47a8731fc0fb","links":{"self":{"href":"https://ezcontent.srijan.net/jsonapi/file/file/4dfc640c-9545-4ea4-a59c-47a8731fc0fb"}},"attributes":{"drupal_internal__fid":326,"langcode":"en","filename":"srijanhero_0.jpg","uri":{"value":"public://2020-05/srijanhero_0.jpg","url":"/sites/default/files/2020-05/srijanhero_0.jpg"},"filemime":"image/jpeg","filesize":25659,"status":true,"created":"2020-05-05T19:48:01+00:00","changed":"2020-05-05T19:48:08+00:00"},"relationships":{"uid":{"data":{"type":"user--user","id":"73368195-3256-4b2c-901d-40ccb24c215f"},"links":{"related":{"href":"https://ezcontent.srijan.net/jsonapi/file/file/4dfc640c-9545-4ea4-a59c-47a8731fc0fb/uid"},"self":{"href":"https://ezcontent.srijan.net/jsonapi/file/file/4dfc640c-9545-4ea4-a59c-47a8731fc0fb/relationships/uid"}}}}}]}'
   
  }

  render() {
    this.cardData=this.cardData.length>1?JSON.parse(this.cardData):'';
    let CardClass = 'row';
    let {
      FieldLink,
      FieldLinkTitle,
      ParagraphContent,
      ShortTitle,
      Subhead,
      Title,
      layout,
      ImageUrl,
      FileObject,
      View_mode,
    } = this.cardData;
    let ImageAlignClass =
      layout === 'card_right_media'
        ? 'layout__region--second order-2'
        : layout === 'card_left_media'
        ? 'layout__region--first'
        : 'w-100 text-center';
    let ImageClass =
      layout === 'none' ? 'mw-100 img-fluid' : 'mw-100 img-fluid mb-3';
    let TextContainerClass =
      layout === 'card_right_media'
        ? 'layout__region--first order-1'
        : layout === 'card_left_media'
        ? 'layout__region--second'
        : '';
    let RowClass =
      layout !== 'none'
        ? 'layout layout--twocol-section layout--twocol-section--50-50'
        : '';
    layout =
      View_mode === 'cards_grid_3xn'
        ? 'field--item col-12 col-sm-12'
        : layout + ' paragraph--type--card';

    return html`
      <link rel="stylesheet" href="./style.css" />
      <div class="row">
        <div class=${RowClass}>
          ${FileObject &&
          ImageUrl &&
          html`<div class=${ImageAlignClass}>
            <img className=${ImageClass} src=${ImageUrl} />
          </div>`}
          <div class=${TextContainerClass}>
            ${Title &&
            html`<div class="mt-3">
              <h3>${Title}</h3>
            </div>`}
            ${ShortTitle &&
            html` <div
              class="border-bottom field--name-field-short-title border-white mt-2"
            >
              ${ShortTitle}
            </div>`}
            ${Subhead &&
            html`<div class="mt-2 rishi field--name-field-subhead">
              ${Subhead}
            </div>`}
            ${ParagraphContent && (
              html `<div class="mt-2"
              >${unsafeHTML(ParagraphContent)}</div>`
            ) }
            ${FieldLink &&
            FieldLinkTitle &&
            html`<div class="text-right pt-3 border-top border-white">
              <a class="btn btn-primary rounded-0" href=${FieldLink}>
                ${FieldLinkTitle}
              </a>
            </div>`}
          </div>
        </div>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('card-component', CardElement);
