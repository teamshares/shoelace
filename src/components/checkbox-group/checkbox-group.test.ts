import '../../../dist/shoelace.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { SlChangeEvent } from '../../events/sl-change.js';
import type SlCheckbox from '../checkbox/checkbox.js';
import type SlCheckboxGroup from './checkbox-group.js';

describe('<sl-checkbox-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no checkbox is checked', async () => {
      const checkboxGroup = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group required>
          <sl-checkbox value="1"></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(checkboxGroup.checkValidity()).to.be.false;
    });

    it('should become valid when an option is checked', async () => {
      const checkboxGroup = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group required>
          <sl-checkbox value="1"></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
      `);

      const secondCheckbox = checkboxGroup.querySelectorAll('sl-checkbox')[1];
      secondCheckbox.click();
      await checkboxGroup.updateComplete;
      expect(checkboxGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one checkbox is checked`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option" required>
          <sl-checkbox name="option" value="1" checked>Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no checkboxes are checked`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option" required>
          <sl-checkbox name="option" value="1">Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option">
          <sl-checkbox name="option" value="1">Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      el.setCustomValidity('Error');

      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const checkboxGroup = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group required>
          <sl-checkbox value="1" checked></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
      `);

      const secondCheckbox = checkboxGroup.querySelectorAll('sl-checkbox')[1];

      expect(checkboxGroup.checkValidity()).to.be.true;
      expect(checkboxGroup.hasAttribute('data-required')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-optional')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-valid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;

      secondCheckbox.click();
      await secondCheckbox.updateComplete;

      expect(checkboxGroup.checkValidity()).to.be.true;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const checkboxGroup = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group required>
          <sl-checkbox value="1"></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
      `);

      const secondCheckbox = checkboxGroup.querySelectorAll('sl-checkbox')[1];

      expect(checkboxGroup.hasAttribute('data-required')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-optional')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-invalid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-valid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;

      secondCheckbox.click();
      await secondCheckbox.updateComplete;
      secondCheckbox.click();
      await secondCheckbox.updateComplete;

      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <sl-checkbox-group required>
            <sl-checkbox value="1"></sl-checkbox>
            <sl-checkbox value="2"></sl-checkbox>
          </sl-checkbox-group>
        </form>
      `);
      const checkboxGroup = el.querySelector<SlCheckboxGroup>('sl-checkbox-group')!;

      expect(checkboxGroup.hasAttribute('data-required')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-optional')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-invalid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-valid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sl-checkbox-group value="1">
            <sl-checkbox id="checkbox-1" name="a" value="1"></sl-checkbox>
            <sl-checkbox id="checkbox-2" name="a" value="2"></sl-checkbox>
          </sl-checkbox-group>
          <sl-button type="submit">Submit</sl-button>
        </form>
      `);
      const button = form.querySelector('sl-button')!;
      const checkboxGroup = form.querySelector<SlCheckboxGroup>('sl-checkbox-group')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      checkboxGroup.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });
});

describe('when resetting a form', () => {
  it('should reset the element to its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sl-checkbox-group>
          <sl-checkbox value="1" checked></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
        <sl-button type="reset">Reset</sl-button>
      </form>
    `);
    const button = form.querySelector('sl-button')!;
    const secondCheckbox = form.querySelectorAll('sl-checkbox')[1];
    secondCheckbox.click();

    await secondCheckbox.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await secondCheckbox.updateComplete;

    expect(secondCheckbox.checked).to.be.false;
  });
});

describe('when submitting a form', () => {
  it('should submit the correct values when one or more values are provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sl-checkbox-group name="a">
          <sl-checkbox id="checkbox-1" value="1" checked></sl-checkbox>
          <sl-checkbox id="checkbox-2" value="2"></sl-checkbox>
          <sl-checkbox id="checkbox-3" value="3"></sl-checkbox>
        </sl-checkbox-group>
        <sl-button type="submit">Submit</sl-button>
      </form>
    `);
    const button = form.querySelector('sl-button')!;
    const checkbox = form.querySelectorAll('sl-checkbox')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);
      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    checkbox.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.getAll('a')).to.include('1: true');
    expect(formData!.getAll('a')).to.include('2: true');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <sl-button type="submit">Submit</sl-button>
        </form>
        <sl-checkbox-group form="f" name="a">
          <sl-checkbox id="checkbox-1" value="1" checked></sl-checkbox>
          <sl-checkbox id="checkbox-2" value="2" checked></sl-checkbox>
          <sl-checkbox id="checkbox-3" value="3"></sl-checkbox>
        </sl-checkbox-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.getAll('a')).to.include('1: true');
    expect(formData.getAll('a')).to.include('2: true');
  });
});

describe('when the value changes', () => {
  it('should emit sl-change and sl-input when toggled with the space bar', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="checkbox-1" value="1"></sl-checkbox>
        <sl-checkbox id="checkbox-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const firstCheckbox = checkboxGroup.querySelector<SlCheckbox>('#checkbox-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    checkboxGroup.addEventListener('sl-change', changeHandler);
    checkboxGroup.addEventListener('sl-input', inputHandler);
    firstCheckbox.focus();
    await sendKeys({ press: ' ' });
    checkboxGroup.dispatchEvent(new FocusEvent('blur'));
    await checkboxGroup.updateComplete;

    expect(changeHandler).to.have.been.called;
    expect(inputHandler).to.have.been.called;
    expect(checkboxGroup.value).to.include('1: true');
    expect(checkboxGroup.value).to.include('2: false');
  });

  it('should emit sl-change and sl-input when clicked', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="checkbox-1" value="1"></sl-checkbox>
        <sl-checkbox id="checkbox-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const checkbox = checkboxGroup.querySelector<SlCheckbox>('#checkbox-1')!;
    const inputHandler = sinon.spy();

    setTimeout(() => checkbox.click());
    checkboxGroup.addEventListener('sl-input', inputHandler);
    const event = (await oneEvent(checkboxGroup, 'sl-change')) as SlChangeEvent;

    expect(event.target).to.equal(checkboxGroup);
    expect(inputHandler).to.have.been.called;
    expect(checkboxGroup.value).to.include('1: true');
    expect(checkboxGroup.value).to.include('2: false');
  });

  it('should not emit sl-change or sl-input when the value is changed programmatically', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="checkbox-1" value="1" checked></sl-checkbox>
        <sl-checkbox id="checkbox-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);

    checkboxGroup.addEventListener('sl-change', () => expect.fail('sl-change should not be emitted'));
    checkboxGroup.addEventListener('sl-input', () => expect.fail('sl-input should not be emitted'));
    checkboxGroup.value = ['1: false', '2: true'];
    await checkboxGroup.updateComplete;
  });

  it('should relatively position content to prevent visually hidden scroll bugs', async () => {
    //
    // See https://github.com/shoelace-style/shoelace/issues/1380
    //
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group value="1">
        <sl-checkbox id="checkbox-1" value="1"></sl-checkbox>
      </sl-checkbox-group>
    `);

    const formControl = checkboxGroup.shadowRoot!.querySelector('.form-control')!;
    const visuallyHidden = checkboxGroup.shadowRoot!.querySelector('.visually-hidden')!;

    expect(getComputedStyle(formControl).position).to.equal('relative');
    expect(getComputedStyle(visuallyHidden).position).to.equal('absolute');
  });

  runFormControlBaseTests('sl-checkbox-group');
});
