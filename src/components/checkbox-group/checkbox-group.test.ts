import '../../../dist/shoelace.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { SlChangeEvent } from '../../events/sl-change.js';
import type SlCheckbox from '../checkbox/checkbox.js';
import type SlCheckboxGroup from './checkbox-group.js';

describe('<sl-checkbox-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
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

      checkboxGroup.value = ['1'];
      await checkboxGroup.updateComplete;

      expect(checkboxGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option" value="1" required>
          <sl-checkbox name="option" value="1">Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option" required>
          <sl-checkbox name="option" value="1">Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<SlCheckboxGroup>(html`
        <sl-checkbox-group label="Select an option" value="3" required>
          <sl-checkbox name="option" value="1">Option 1</sl-checkbox>
          <sl-checkbox name="option" value="2">Option 2</sl-checkbox>
          <sl-checkbox name="option" value="3">Option 3</sl-checkbox>
        </sl-checkbox-group>
      `);

      expect(el.checkValidity()).to.be.true;
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
        <sl-checkbox-group value="1" required>
          <sl-checkbox value="1"></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
      `);
      const secondRadio = checkboxGroup.querySelectorAll('sl-radio')[1];

      expect(checkboxGroup.checkValidity()).to.be.true;
      expect(checkboxGroup.hasAttribute('data-required')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-optional')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-valid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      await secondRadio.updateComplete;

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
      const secondRadio = checkboxGroup.querySelectorAll('sl-radio')[1];

      expect(checkboxGroup.hasAttribute('data-required')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-optional')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-invalid')).to.be.true;
      expect(checkboxGroup.hasAttribute('data-valid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkboxGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      checkboxGroup.value = [''];
      await checkboxGroup.updateComplete;

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
      const checkboxGroup = el.querySelector<SlCheckboxGroup>('sl-radio-group')!;

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
            <sl-checkbox id="radio-1" name="a" value="1"></sl-checkbox>
            <sl-checkbox id="radio-2" name="a" value="2"></sl-checkbox>
          </sl-checkbox-group>
          <sl-button type="submit">Submit</sl-button>
        </form>
      `);
      const button = form.querySelector('sl-button')!;
      const checkboxGroup = form.querySelector<SlCheckboxGroup>('sl-radio-group')!;
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
        <sl-checkbox-group value="1">
          <sl-checkbox value="1"></sl-checkbox>
          <sl-checkbox value="2"></sl-checkbox>
        </sl-checkbox-group>
        <sl-button type="reset">Reset</sl-button>
      </form>
    `);
    const button = form.querySelector('sl-button')!;
    const checkboxGroup = form.querySelector('sl-radio-group')!;
    checkboxGroup.value = '2';

    await checkboxGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await checkboxGroup.updateComplete;

    expect(checkboxGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sl-checkbox-group name="a" value="1">
          <sl-checkbox id="radio-1" value="1"></sl-checkbox>
          <sl-checkbox id="radio-2" value="2"></sl-checkbox>
          <sl-checkbox id="radio-3" value="3"></sl-checkbox>
        </sl-checkbox-group>
        <sl-button type="submit">Submit</sl-button>
      </form>
    `);
    const button = form.querySelector('sl-button')!;
    const radio = form.querySelectorAll('sl-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('2');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <sl-button type="submit">Submit</sl-button>
        </form>
        <sl-checkbox-group form="f" name="a" value="1">
          <sl-checkbox id="radio-1" value="1"></sl-checkbox>
          <sl-checkbox id="radio-2" value="2"></sl-checkbox>
          <sl-checkbox id="radio-3" value="3"></sl-checkbox>
        </sl-checkbox-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.get('a')).to.equal('1');
  });
});

describe('when a size is applied', () => {
  it('should apply the same size to all radios', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group size="large">
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
        <sl-checkbox id="radio-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const [radio1, radio2] = checkboxGroup.querySelectorAll('sl-radio')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should apply the same size to all radio buttons', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group size="large">
        <sl-checkbox-button id="radio-1" value="1"></sl-radio-button>
        <sl-checkbox-button id="radio-2" value="2"></sl-radio-button>
      </sl-checkbox-group>
    `);
    const [radio1, radio2] = checkboxGroup.querySelectorAll('sl-radio-button')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should update the size of all radio buttons when size changes', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group size="small">
        <sl-checkbox-button id="radio-1" value="1"></sl-radio-button>
        <sl-checkbox-button id="radio-2" value="2"></sl-radio-button>
      </sl-checkbox-group>
    `);
    const [radio1, radio2] = checkboxGroup.querySelectorAll('sl-radio-button')!;

    expect(radio1.size).to.equal('small');
    expect(radio2.size).to.equal('small');

    checkboxGroup.size = 'large';
    await checkboxGroup.updateComplete;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });
});

describe('when the value changes', () => {
  it('should emit sl-change when toggled with the arrow keys', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
        <sl-checkbox id="radio-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const firstCheckbox = checkboxGroup.querySelector<SlCheckbox>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    checkboxGroup.addEventListener('sl-change', changeHandler);
    checkboxGroup.addEventListener('sl-input', inputHandler);
    firstCheckbox.focus();
    await sendKeys({ press: 'ArrowRight' });
    await checkboxGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(checkboxGroup.value).to.equal('2');
  });

  it('should emit sl-change and sl-input when clicked', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
        <sl-checkbox id="radio-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const checkbox = checkboxGroup.querySelector<SlCheckbox>('#radio-1')!;
    setTimeout(() => checkbox.click());
    const event = (await oneEvent(checkboxGroup, 'sl-change')) as SlChangeEvent;
    expect(event.target).to.equal(checkboxGroup);
    expect(checkboxGroup.value).to.equal('1');
  });

  it('should emit sl-change and sl-input when toggled with spacebar', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group>
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
        <sl-checkbox id="radio-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);
    const checkbox = checkboxGroup.querySelector<SlCheckbox>('#radio-1')!;
    checkbox.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(checkboxGroup, 'sl-change')) as SlChangeEvent;
    expect(event.target).to.equal(checkboxGroup);
    expect(checkboxGroup.value).to.equal('1');
  });

  it('should not emit sl-change or sl-input when the value is changed programmatically', async () => {
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group value="1">
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
        <sl-checkbox id="radio-2" value="2"></sl-checkbox>
      </sl-checkbox-group>
    `);

    checkboxGroup.addEventListener('sl-change', () => expect.fail('sl-change should not be emitted'));
    checkboxGroup.addEventListener('sl-input', () => expect.fail('sl-input should not be emitted'));
    checkboxGroup.value = ['2'];
    await checkboxGroup.updateComplete;
  });

  it('should relatively position content to prevent visually hidden scroll bugs', async () => {
    //
    // See https://github.com/shoelace-style/shoelace/issues/1380
    //
    const checkboxGroup = await fixture<SlCheckboxGroup>(html`
      <sl-checkbox-group value="1">
        <sl-checkbox id="radio-1" value="1"></sl-checkbox>
      </sl-checkbox-group>
    `);

    const formControl = checkboxGroup.shadowRoot!.querySelector('.form-control')!;
    const visuallyHidden = checkboxGroup.shadowRoot!.querySelector('.visually-hidden')!;

    expect(getComputedStyle(formControl).position).to.equal('relative');
    expect(getComputedStyle(visuallyHidden).position).to.equal('absolute');
  });

  /**
   * @see https://github.com/shoelace-style/shoelace/issues/1361
   * This isn't really possible to test right now due to importing "shoelace.js" which
   * auto-defines all of our components up front. This should be tested if we ever split
   * to non-auto-defining components and not auto-defining for tests.
   */
  it.skip('should sync up radios and radio buttons if defined after radio group', async () => {
    // customElements.define("sl-radio-group", SlCheckboxGroup)
    //
    // const checkboxGroup = await fixture<SlCheckboxGroup>(html`
    //   <sl-checkbox-group value="1">
    //     <sl-checkbox id="radio-1" value="1"></sl-checkbox>
    //     <sl-checkbox id="radio-2" value="2"></sl-checkbox>
    //   </sl-checkbox-group>
    // `);
    //
    // await aTimeout(1)
    //
    // customElements.define("sl-radio-button", SlRadioButton)
    //
    // expect(checkboxGroup.querySelector("sl-radio")?.getAttribute("aria-checked")).to.equal("false")
    //
    // await aTimeout(1)
    //
    // customElements.define("sl-radio", SlRadio)
    //
    // await aTimeout(1)
    //
    // expect(checkboxGroup.querySelector("sl-radio")?.getAttribute("aria-checked")).to.equal("true")
  });

  runFormControlBaseTests('sl-radio-group');
});
