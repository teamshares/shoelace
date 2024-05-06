import { css } from 'lit';

export default css`
  :host {
    display: block;
    line-height: var(--ts-leading-5);
    margin-top: var(--sl-spacing-medium);
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  :host([horizontal]),
  :host([contained]) {
    margin-top: var(--sl-spacing-small);
  }

  :host([horizontal][contained]) {
    margin-top: 0;
    height: 100%;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.75em;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Contained */
  .radio--contained {
    padding: 1.375rem var(--ts-spacing-large) 1.375rem var(--sl-spacing-medium);
    border: 1px solid var(--sl-color-gray-400);
    border-radius: var(--sl-border-radius-medium);
    width: 100%;
    height: 100%;
  }

  .radio--contained:hover,
  .radio--contained.radio--checked:hover {
    background-color: var(--sl-color-blue-50);
    transition: var(--sl-transition-medium) all;
  }

  .radio--contained.radio--checked .radio__label {
    color: var(--sl-color-blue-600);
    font-weight: var(--ts-font-semibold);
  }

  .radio--contained.radio--checked .radio__description {
    color: var(--sl-color-gray-900);
    font-weight: var(--sl-font-weight-normal);
  }

  .radio--contained.radio--checked {
    background-color: var(--sl-color-blue-100);
    border: 1px solid var(--sl-color-blue-600);
    outline: 1px solid var(--sl-color-blue-600);
    transition: var(--sl-transition-medium) all;
  }
`;
