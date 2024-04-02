import { classMap } from 'lit/directives/class-map.js';
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState
} from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import styles from './checkbox-group.styles.js';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element.js';
import type SlCheckbox from '../checkbox/checkbox.js';

/**
 * @summary Checkbox groups are used to group multiple [checkboxes](/components/checkbox) so they function as a single form control.
 * @documentation https://shoelace.style/components/checkbox-group
 * @status experimental
 * @since 2.0
 * @pattern stable
 * @figma ready
 *
 * @slot - The default slot where `<sl-checkbox>` elements are placed.
 * @slot label - The checkbox group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
 * @slot label-tooltip - Used to add text that is displayed in a tooltip next to the label. Alternatively, you can use the `label-tooltip` attribute.
 * @slot help-text - Text that describes how to use the checkbox group. Alternatively, you can use the `help-text` attribute.
 *
 * @event sl-change - Emitted when the checkbox group's selected value changes.
 * @event sl-input - Emitted when the checkbox group receives user input.
 * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 */
export default class SlCheckboxGroup extends ShoelaceElement implements ShoelaceFormControl {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private customValidityMessage = '';
  private validationTimeout: number;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.checkbox-group__validation-input') validationInput: HTMLInputElement;

  @state() private errorMessage = '';

  /**
   * The checkbox group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** Text that appears in a tooltip next to the label. If you need to display HTML in the tooltip, use the `label-tooltip` slot instead. */
  @property({ attribute: 'label-tooltip' }) labelTooltip = '';

  /** The checkbox groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The name of the checkbox group, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the checkbox group, submitted as a name/value pair with form data.
   */
  @property({ type: Array }) value: string[] = [];

  /** The radio group's size. This size will be applied to all child radios and radio buttons. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The radio group's orientation. Changes the group's layout from the default (vertical) to horizontal. */
  @property({ type: Boolean, reflect: true }) horizontal = false;

  /** The radio group's style. Changes the group's style from the default (plain) style to the 'contained' style. This style will be applied to all child radios (but not child radio buttons, which do not have the 'contained' style as an option). */
  @property({ type: Boolean, reflect: true }) contained = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Gets the validity state object */
  get validity() {
    const anyCheckboxChecked = this.value.some(value => value.includes('true'));
    const isRequiredAndEmpty = this.required && !anyCheckboxChecked;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }

    return validValidityState;
  }

  /** Gets the validation message */
  get validationMessage() {
    const anyCheckboxChecked = this.value.some(value => value.includes('true'));
    const isRequiredAndEmpty = this.required && !anyCheckboxChecked;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }

    return '';
  }

  private initializeValueFromCheckboxes() {
    const checkboxes = this.getAllCheckboxes();
    this.value = checkboxes.map(checkbox => `${checkbox.value}: ${checkbox.checked}`);
  }

  connectedCallback() {
    super.connectedCallback();
    const checkboxes = this.getAllCheckboxes();
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('sl-change', this.handleCheckboxClick.bind(this));
    });
    this.initializeValueFromCheckboxes();
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllCheckboxes() {
    return [...this.querySelectorAll<SlCheckbox>('sl-checkbox')];
  }

  private handleCheckboxClick(event: MouseEvent) {
    const target = event.currentTarget as SlCheckbox;

    if (target.disabled) {
      return;
    }

    const checkboxes = this.getAllCheckboxes();
    this.value = checkboxes.map(checkbox => `${checkbox.value}: ${checkbox.checked}`);

    console.log(this.value);

    this.emit('sl-change');
    this.emit('sl-input');
    this.updateCheckboxValidity();
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private async syncCheckboxElements() {
    const checkboxes = this.getAllCheckboxes();

    await Promise.all(
      // Sync the checkbox size, validity, and existence of 'contained' style
      checkboxes.map(async checkbox => {
        await checkbox.updateComplete;
        checkbox.size = this.size;
        checkbox.horizontal = this.horizontal;
        // If one checkbox in a group is 'contained' make sure they're all contained
        const isAnyContained = checkboxes.some(containedCheckbox => containedCheckbox.contained);
        if (isAnyContained) {
          checkboxes.forEach(containedCheckbox => {
            containedCheckbox.contained = true;
          });
          // Otherwise 'contained' is set through Radio Group
        } else {
          checkbox.contained = this.contained;
        }
      })
    );
  }

  private syncCheckboxes() {
    if (customElements.get('sl-checkbox')) {
      this.syncCheckboxElements();
    } else {
      customElements.whenDefined('sl-checkbox').then(() => this.syncCheckboxes());
    }
  }

  private updateCheckboxValidity() {
    if (this.required) {
      const checkboxes = this.getAllCheckboxes();
      const anyCheckboxChecked = this.value.some(value => value.includes('true'));
      const isValueEmpty = !anyCheckboxChecked;

      checkboxes.forEach(checkbox => {
        checkbox.required = isValueEmpty;
      });
    }
  }

  @watch('size', { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncCheckboxes();
  }

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckboxValidity();
    }
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const anyCheckboxChecked = this.value.some(value => value.includes('true'));
    const isRequiredAndEmpty = this.required && !anyCheckboxChecked;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }

    return true;
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorMessage = this.customValidityMessage || isValid ? '' : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);

    if (!isValid) {
      // Show the browser's constraint validation message
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => (this.validationInput.hidden = true), 10000) as unknown as number;
    }

    return isValid;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = '') {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabelTooltipSlot = this.hasSlotController.test('label-tooltip');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasLabelTooltip = this.labelTooltip ? true : !!hasLabelTooltipSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const defaultSlot = html` <slot @slotchange=${this.syncCheckboxes}></slot> `;

    return html`
      <fieldset
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--radio-group': true,
          'form-control--has-label': hasLabel,
          'form-control--has-label-tooltip': hasLabelTooltip,
          'form-control--has-help-text': hasHelpText
        })}
        role="listbox"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>
          ${hasLabelTooltip
            ? html`
                <sl-tooltip class="form-control--label-tooltip">
                  <div slot="content">
                    <slot name="label-tooltip">${this.labelTooltip}</slot>
                  </div>
                  <sl-icon library="fa" name="fas-circle-info"></sl-icon>
                </sl-tooltip>
              `
            : ''}
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="checkbox-group__validation">
              <input
                type="text"
                class="checkbox-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>
          ${defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
}
