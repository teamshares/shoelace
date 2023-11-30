import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --width: 30rem;
    --header-spacing: var(--ts-spacing-large);
    --body-spacing: 0 var(--ts-spacing-large);
    --footer-spacing: var(--ts-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-x-large);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    /* ts-heading-6 */
    font-size: var(--ts-font-xl); /* 20px */
    font-weight: var(--ts-font-medium); /* 500 */
    letter-spacing: var(--ts-tracking-tight); /* -0.025em */
    line-height: var(--ts-leading-6); /* 1.5rem * 24px */
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    gap: var(--sl-spacing-x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__close {
    align-items: center;
    display: flex;
    flex: none;
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    color: var(--ts-color-text-subdued);
    /* ts-body-1 */
    font-size: var(--ts-font-base); /* 16px */
    font-weight: var(--ts-font-normal); /* 400 */
    letter-spacing: var(--ts-tracking-normal); /* normal */
    line-height: var(--ts-leading-6); /* 1.5rem * 24px */
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media screen and (max-width: 420px) {
    :host {
      --header-spacing: var(--sl-spacing-large);
      --body-spacing: 0 var(--sl-spacing-large);
      --footer-spacing: var(--sl-spacing-large);
    }

    /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */

    .dialog__panel {
      height: max-content;
      max-height: 80vh;
    }

    .dialog__footer {
      display: flex;
      gap: var(--sl-spacing-x-small);
      justify-content: flex-end;
      flex: 1 0 100%;
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }

    .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
      margin-inline-start: 0;
    }
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;
