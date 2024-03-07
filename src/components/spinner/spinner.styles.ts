import { css } from 'lit';

// Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
// Therefore, if a spinner is used in a flex container without `flex: none` applied, the spinner can grow/shrink and
// break the animation. The use of `flex: none` on the host element prevents this by always having the spinner sized
// according to its actual dimensions.

export default css`
  :host {
    --track-width: 3.5px;
    --track-color: var(--sl-color-primary-100);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 4s;

    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
  }

  .spinner__track,
  .spinner__indicator,
  .indicator__gradient {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: white;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  .indicator__gradient {
    transform-origin: 50% 50%;
  }

  .linear__gradient stop:nth-child(1) {
    stop-color: var(--sl-color-neutral-0);
  }

  .linear__gradient stop:nth-child(2) {
    stop-color: var(--track-color);
    stop-opacity: 25%;
  }

  .linear__gradient stop:nth-child(3) {
    stop-color: var(--indicator-color);
    stop-opacity: 40%;
  }

  .linear__gradient stop:nth-child(4) {
    stop-color: var(--indicator-color);
    stop-opacity: 60%;
  }

  .linear__gradient stop:nth-child(5) {
    stop-color: var(--indicator-color);
    stop-opacity: 90%;
  }

  .linear__gradient stop:nth-child(6) {
    stop-color: var(--indicator-color);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 1.375em, 1.375em;
    }
  }
`;
