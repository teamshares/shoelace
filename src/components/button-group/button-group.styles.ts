import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  :host(.segmented-control-group) {
    padding: var(--sl-spacing-2x-small);
    border-style: solid;
    border-width: var(--sl-input-border-width);
    border-color: var(--sl-color-neutral-400);
    border-radius: var(--sl-border-radius-pill);
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;
