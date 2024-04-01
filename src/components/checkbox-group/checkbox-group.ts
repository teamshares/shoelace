import SlCheckboxGroup from './checkbox-group.component.js';

export * from './checkbox-group.component.js';
export default SlCheckboxGroup;

SlCheckboxGroup.define('sl-checkbox-group');

declare global {
  interface HTMLElementTagNameMap {
    'sl-checkbox-group': SlCheckboxGroup;
  }
}
