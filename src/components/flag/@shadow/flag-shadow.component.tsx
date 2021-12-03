import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { isEmptyString, uniGetCleanContent } from '@uiwebkit/common';

@Component({
  tag: 'uni-flag-shadow',
  styleUrl: '../styles/flag.css',
  shadow: true,
})
export class UniFlagComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);
    const UniFlagTag = !isEmptyString(name) ? `uni-flag-${name}` : null;

    return (
      <UniFlagTag square={this.square || this.round} round={this.round}>
        <slot />
      </UniFlagTag>
    );
  }
}