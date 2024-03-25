import { css } from 'lit';

export default css`
  .form-control-input {
    margin: var(--sl-spacing-2x-small) 0 0;
  }

  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    font-weight: var(--sl-font-weight-semibold); /* 500 */
    line-height: var(--ts-leading-5); /* 1.25rem */
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  .form-control--has-label.form-control--radio-group .form-control__label {
    margin-bottom: 0;
  }

  /* Label with tooltip */
  .form-control--has-label.form-control--has-label-tooltip .form-control__label {
    display: inline-flex;
    align-items: center;
    gap: var(--sl-spacing-2x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--label-tooltip {
    color: var(--sl-color-neutral-700);
    font-size: var(--sl-font-size-small);
  }

  /* Label with optional context note */
  .form-control--has-label.form-control--has-context-note {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .form-control__label-context-note {
    color: var(--sl-input-help-text-color);
    font-size: var(--sl-font-size-small);
    line-height: var(--ts-leading-5); /* 1.25rem */
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .form-control--has-label.form-control--has-context-note .form-control-input {
    width: 100%;
  }

  /* Help text, description, selected content */
  .form-control--has-help-text .form-control__help-text,
  .radio--has-description .radio__description {
    display: block;
    color: var(--sl-input-help-text-color);
    line-height: var(--ts-leading-5); /* 1.25rem */
    margin-top: var(--sl-spacing-x-small);
  }

  .radio--has-description .radio__description {
    margin-top: 0.375rem;
  }

  .radio--has-selected-content .radio__selected-content {
    display: block;
    margin-top: var(--sl-spacing-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text,
  .radio--has-description .radio__description {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-medium);
  }

  .form-control--has-help-text .switch .form-control__help-text {
    margin-top: var(--sl-spacing-3x-small);
  }
`;
