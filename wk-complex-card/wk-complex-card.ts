import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from './wk-complex-card.css.lit';

export type CardVariantType = 'primary' | 'secondary' | 'tertiary';

/**
 * The Complex Card component.
 * @element wk-complex-card
 */
@customElement('wk-complex-card')
export class WkComplexCard extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The card title.
   */
  @property({ attribute: 'label' }) title: string;

  /**
   * The card URL.
   */
  @property() url: string;

  /**
   * The card published date.
   */
  @property() date: string;

  /**
   * Define if the card has rounded corners.
   */
  @property({ type: Boolean }) 
  rounded = false;

  /**
   * The card style variant to use.
   */
  @property() 
  variant: CardVariantType = 'primary' ;

  /**
   * Add slots.
   */

  render(): TemplateResult {
    const classes = {
      'card': true,
      'card--rounded': this.rounded,
      [`card--${this.variant}`]: true,
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="card__content">
          <span class="card__tag">Fashion</span>

          <h4 class="card__title">
            <a href="${this.url}">${this.title}</a>
          </h4>

          <div class="card__meta">${this.date}</div>
        </div>
      </div>
    `;
  }
}
