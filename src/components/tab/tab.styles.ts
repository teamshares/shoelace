import { css } from 'lit';

export default css`
  :host {
    --group-track-width: 1px;

    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--ts-leading-6);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-medium);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled):not(.tab--active) {
    color: var(--sl-color-neutral-900);
  }

  :host(.tab--top) .tab {
    border-bottom: calc(var(--sl-spacing-2x-small) - var(--group-track-width)) solid transparent;
    padding-bottom: calc(var(--sl-spacing-medium) + var(--group-track-width));
    transition: var(--sl-transition-medium) border-color ease;
  }

  :host(.tab--bottom) .tab {
    border-top: calc(var(--sl-spacing-2x-small) - var(--group-track-width)) solid transparent;
    padding-top: calc(var(--sl-spacing-medium) + var(--group-track-width));
    transition: var(--sl-transition-medium) border-color ease;
  }

  :host(.tab--start) .tab {
    display: flex;
    border-right: calc(var(--sl-spacing-2x-small) - var(--group-track-width)) solid transparent;
    padding-right: calc(var(--sl-spacing-medium) + var(--group-track-width));
    transition: var(--sl-transition-medium) border-color ease;
  }

  :host(.tab--end) .tab {
    border-left: calc(var(--sl-spacing-2x-small) - var(--group-track-width)) solid transparent;
    padding-left: calc(var(--sl-spacing-medium) + var(--group-track-width));
    transition: var(--sl-transition-medium) border-color ease;
  }

  .tab:hover:not(.tab--disabled):not(.tab--active) {
    border-color: var(--sl-color-neutral-400);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    color: var(--sl-color-neutral-700);
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button:hover::part(base) {
    color: var(--sl-color-neutral-800);
  }

  .tab__close-button:active::part(base) {
    color: var(--sl-color-neutral-900);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  /*
   * Badges
   */

  .tab ::slotted(sl-badge) {
    margin-inline-start: var(--sl-spacing-medium);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
