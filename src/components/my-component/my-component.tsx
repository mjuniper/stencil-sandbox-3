import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText (): string {
    return format(this.first, this.middle, this.last);
  }

  render () {
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <calcite-button appearance="solid" color="blue" scale="m">this is a calcite button</calcite-button>
      </Host >
    );
  }
}
