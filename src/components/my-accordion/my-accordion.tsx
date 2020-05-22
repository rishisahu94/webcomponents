import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.scss',
})

export class MyComponent {

  @Prop() card: any;

  render() {
    console.log('hi rishi',this.card)
    this.card=JSON.parse(this.card);
    console.log('this.cardData',this.card)
    const {
      FieldLink,
      FieldLinkTitle,
      ParagraphContent,
      ShortTitle,
      Subhead,
      Title,
      ImageUrl,
      layout,
      viewMode
    } = this.card;
    let ImageAlignClass =
      layout === "card_right_media"
        ? "layout__region--second"
        : layout === "card_left_media"
        ? "layout__region--first"
        : "w-100 text-center";
    let ImageClass =
      layout === "none" ? "mw-100 img-fluid" : "mw-100 img-fluid mb-3";
    let TextContainerClass =
      layout === "card_right_media"
        ? "layout__region--first order-first"
        : layout === "card_left_media"
        ? "layout__region--second"
        : "";
    let RowClass = layout !== "none" ? "layout layout--twocol-section layout--twocol-section--50-50" : "";
    let paraTypeCss = "paragraph--type--card";
    if(viewMode === "cards_grid_3xn" && layout === "none"){
      paraTypeCss = "layout--threecol-section-col"
    }
    
    return (
      <div class={`${paraTypeCss} ${layout}`}>
        <div class={RowClass}>
          {ImageUrl && (
            <div class={ImageAlignClass}>
              <img class={ImageClass} src={ImageUrl} />
            </div>
          )}
          <div class={TextContainerClass}>
            {Title && (
              <div class="mt-3">
                <h3>{Title}</h3>
              </div>
            )}
            {ShortTitle && (
              <div class="border-bottom field--name-field-short-title border-white mt-2">
                {ShortTitle}
              </div>
            )}
            {Subhead && (
              <div class="mt-2 field--name-field-subhead">
                {Subhead}
              </div>
            )}
            {ParagraphContent ? (
              <div
              innerHTML={ParagraphContent}
                class="mt-2"
              />
            ) : null}
            {FieldLink && FieldLinkTitle && (
              <div class="text-right pt-3 border-top border-white">
                <a class="btn btn-primary rounded-0" href={FieldLink}>
                  {FieldLinkTitle}
                </a>
              </div>
            )}
          </div>
        </div>
  
      </div>
    );
  }
}
