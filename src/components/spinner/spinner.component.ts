import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import componentStyles from '../../styles/component.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './spinner.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://shoelace.style/components/spinner
 * @status stable
 * @since 2.0
 * @pattern stable
 * @figma ready
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the spinner's indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
export default class SlSpinner extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  /** The spinner's size. If left unset, the spinner will inherit the parent element's font size. Alternatively you can also set a custom size by passing a value to the `customSize` property. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' | 'x-large' | 'custom' = 'custom';

  /** Can be used to set a custom size either in pixels or rems. Whenever possible, avoid using this option and stick to the pre-defined size options. */
  @property() customSize: '';

  render() {
    const svgSizes = {
      small: '16px',
      medium: '32px',
      large: '48px',
      'x-large': '64px',
      custom: this.customSize ? this.customSize : '1em'
    };

    return html`
      <svg
        part="base"
        class="spinner"
        role="progressbar"
        aria-label=${this.localize.term('loading')}
        width=${svgSizes[this.size]}
        height=${svgSizes[this.size]}
        font-size=${svgSizes[this.size]}
      >
        <circle class="spinner__track"></circle>
        <mask id="mask">
          <circle class="spinner__indicator"></circle>
        </mask>
        <linearGradient id="linearColors" class="linear__gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="5%"></stop>
          <stop offset="25%"></stop>
          <stop offset="40%"></stop>
          <stop offset="60%"></stop>
          <stop offset="80%"></stop>
          <stop offset="100%"></stop>
        </linearGradient>
        <circle class="indicator__gradient" stroke="url(#linearColors)" mask="url(#mask)"></circle>
      </svg>
    `;
  }
}
