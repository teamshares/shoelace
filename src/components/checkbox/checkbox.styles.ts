import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--small .checkbox__description {
    font-size: var(--sl-font-size-x-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--medium .checkbox__description,
  .checkbox--large .checkbox__description {
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    border-color: var(--sl-color-primary-500);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host-context([required]) .checkbox__label::after {
    display: none;
  }

  :host([required]) .checkbox__label::after {
    display: none;
  }

  /* If parent Checkbox Group has 'data-user-invalid', style all checkboxes in the group as 'data-user-invalid' by targeting with a class ('checkbox-user-invalid'), since the checkboxes can't be targeted using ::slotted */
  :host(.checkbox-user-invalid) .checkbox__control {
    border-color: var(--sl-color-danger-600);
  }

  :host(.checkbox-user-invalid)
    .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input:focus-visible
    ~ .checkbox__control {
    border-color: var(--sl-color-danger-600);
    outline: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-error-focus-ring-color);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Handle spacing for checkbox groups rendered with Simple Form */
  :host(.groupedCheckbox) {
    margin-top: var(--sl-spacing-medium);
  }

  :host(.groupedCheckbox[horizontal]),
  :host(.groupedCheckbox[contained]) {
    margin-top: var(--sl-spacing-small);
  }

  :host(.groupedCheckbox[horizontal][contained]) {
    margin-top: 0;
    height: 100%;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.75em;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Contained */
  .checkbox--contained {
    padding: 1.375rem var(--ts-spacing-large) 1.375rem var(--sl-spacing-medium);
    border: 1px solid var(--sl-color-gray-400);
    border-radius: var(--sl-border-radius-medium);
    width: 100%;
    height: 100%;
  }

  :not(.checkbox--disabled).checkbox--contained:hover,
  :not(.checkbox--disabled).checkbox--contained.checkbox--checked:hover {
    background-color: var(--sl-color-blue-50);
    transition: var(--sl-transition-medium) all;
  }

  .checkbox--contained.checkbox--checked .checkbox__label {
    color: var(--sl-color-blue-600);
    font-weight: var(--ts-font-semibold);
  }

  .checkbox--contained.checkbox--checked .checkbox__description {
    color: var(--sl-color-gray-900);
    font-weight: var(--sl-font-weight-normal);
  }

  .checkbox--contained.checkbox--checked {
    background-color: var(--sl-color-blue-100);
    border: 1px solid var(--sl-color-blue-600);
    outline: 1px solid var(--sl-color-blue-600);
    transition: var(--sl-transition-medium) all;
  }
`;
