import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})

export class MyComponent {

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() label: string;

  @Prop() card: string;

  @Prop() description: string;

  @Prop() width: string;

  @Prop() color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    console.log(this.card,this.width)
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    console.log(this.card,this.width)
    return (
      <div>
      <button class="accordion"
      style={{
        width: this.width,
        backgroundColor: this.color,
      }}
      onClick={() => this.toggleComponent()}>
      {this.label}
      {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>
      <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
      style={{width: this.width}}>
      <p>{this.description}</p>
      </div>
      </div>
    )
  }
}