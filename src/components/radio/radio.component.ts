import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import SlAnimation from '../animation/animation.component.js';
import SlIcon from '../icon/icon.component.js';
import styles from './radio.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Shoelace's Radio component, more commonly called **Radio Button**, allows the user to select a single option from a group. Radios should always be nested within a [Radio Group](/components/radio-group).
 * @documentation https://shoelace.style/components/radio
 * @status stable
 * @since 2.0
 * @pattern stable
 * @figma ready
 *
 * @dependency sl-icon
 *
 * @slot - The radio's label.
 * @slot description - A description of the radio's label. Serves as help text for individual radio items. Alternatively, you can use the `description` attribute.
 * @slot selected-content - Use to nest rich content (like an input) inside a selected radio item. Use only with the contained style.
 *
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<sl-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 * @csspart description - The container that wraps the radio's description.
 * @csspart selected-content - The container that wraps optional content that appears when a radio is selected (checked).
 */
export default class SlRadio extends ShoelaceElement {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];
  static dependencies = { 'sl-icon': SlIcon, 'sl-animation': SlAnimation };

  private readonly hasSlotController = new HasSlotController(this, 'description');

  @state() checked = false;
  @state() protected hasFocus = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  /**
   * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
   * attribute can typically be omitted.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** A description of the radio's label. Serves as help text for individual radio items. If you need to display HTML, use the `description` slot instead. */
  @property({ attribute: 'description' }) description = '';

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws a container around the radio button. */
  @property({ type: Boolean, reflect: true }) contained = false;

  constructor() {
    super();
    this.addEventListener('blur', this.handleBlur);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('focus', this.handleFocus);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.emit('sl-blur');
  };

  private handleClick = () => {
    if (!this.disabled) {
      this.checked = true;
    }
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.emit('sl-focus');
  };

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('tabindex', this.checked ? '0' : '-1');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  render() {
    const hasDescriptionSlot = this.hasSlotController.test('description');
    const hasDescription = this.description ? true : !!hasDescriptionSlot;

    return html`
      <span
        part="base"
        class=${classMap({
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
          'radio--contained': this.contained,
          'radio--small': this.size === 'small',
          'radio--medium': this.size === 'medium',
          'radio--large': this.size === 'large',
          'radio--has-description': hasDescription,
          'radio--has-selected-content': this.hasSlotController.test('selected-content')
        })}
      >
        <span part="${`control${this.checked ? ' control--checked' : ''}`}" class="radio__control"
        aria-describedby=${hasDescription ? '' : 'description'}>
          ${
            this.checked
              ? html`
                  <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon>
                `
              : ''
          }
        </span>

          <div part="label" class="radio__label">
          <slot></slot>
            <div
              aria-hidden=${hasDescription ? 'false' : 'true'}
              class="radio__description"
              id="description"
              part="description"
            >
              <slot name="description">${this.description}</slot>
            </div>
            ${
              this.checked
                ? html`
                    <sl-animation name="fadeIn" easing="linear" duration="150" iterations="1" play
                      ><slot name="selected-content" part="selected-content" class="radio__selected-content"></slot
                    ></sl-animation>
                  `
                : ''
            }            
          </div>
        </div>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-radio': SlRadio;
  }
}
