import { css } from 'lit';

export default css`
  :host {
    display: block;
    line-height: var(--ts-leading-5);
  }

  :host([horizontal]) .form-control-input {
    display: flex;
    column-gap: var(--ts-spacing-2x-large);
  }

  :host([contained]) .form-control-input {
    margin-top: var(--sl-spacing-medium);
  }

  :host([horizontal][contained]) .form-control-input {
    margin-top: var(--sl-spacing-medium);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
    gap: var(--sl-spacing-x-small);
  }

  :host ::slotted(sl-radio) {
    margin-top: var(--sl-spacing-medium);
  }

  :host([horizontal]) ::slotted(sl-radio),
  :host([contained]) ::slotted(sl-radio) {
    margin-top: var(--sl-spacing-small);
  }

  :host([horizontal][contained]) ::slotted(sl-radio) {
    margin-top: 0;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
