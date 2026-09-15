import '../../../dist/shoelace.js';
import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form.js';
import sinon from 'sinon';
import type SlTextarea from './textarea.js';

describe('<sl-textarea>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SlTextarea>(html` <sl-textarea label="Name"></sl-textarea> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SlTextarea>(html` <sl-textarea></sl-textarea> `);

    expect(el.size).to.equal('medium');
    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.title).to.equal('');
    expect(el.filled).to.be.false;
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.placeholder).to.equal('');
    expect(el.rows).to.equal(4);
    expect(el.resize).to.equal('vertical');
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<SlTextarea>(html` <sl-textarea title="Test"></sl-textarea> `);
    const textarea = el.shadowRoot!.querySelector('textarea')!;

    expect(textarea.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlTextarea>(html` <sl-textarea disabled></sl-textarea> `);
    const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('[part~="textarea"]')!;

    expect(textarea.disabled).to.be.true;
  });

  it('should focus the textarea when clicking on the label', async () => {
    const el = await fixture<SlTextarea>(html` <sl-textarea label="Name"></sl-textarea> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('sl-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit sl-change and sl-input when the user types in the textarea', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea></sl-textarea> `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('sl-input', inputHandler);
      el.addEventListener('sl-change', changeHandler);
      el.focus();
      await sendKeys({ type: 'abc' });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it('should not emit sl-change or sl-input when the value is set programmatically', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea></sl-textarea> `);

      el.addEventListener('sl-change', () => expect.fail('sl-change should not be emitted'));
      el.addEventListener('sl-input', () => expect.fail('sl-input should not be emitted'));
      el.value = 'abc';

      await el.updateComplete;
    });

    it('should not emit sl-change or sl-input when calling setRangeText()', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea value="hi there"></sl-textarea> `);

      el.addEventListener('sl-change', () => expect.fail('sl-change should not be emitted'));
      el.addEventListener('sl-input', () => expect.fail('sl-input should not be emitted'));
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText('hello');

      await el.updateComplete;
    });
  });

  describe('when resize is "auto"', () => {
    // The browser surfaces the loop as an error event on window rather than a rejection, so the
    // only way to assert its absence is to listen for it across the interaction.
    function recordResizeObserverLoopErrors() {
      const seen: string[] = [];
      const onError = (event: ErrorEvent) => {
        if (event.message.includes('ResizeObserver loop')) seen.push(event.message);
      };

      window.addEventListener('error', onError);
      return {
        seen,
        stop: () => window.removeEventListener('error', onError)
      };
    }

    async function settle(el: SlTextarea) {
      await el.updateComplete;
      // Two frames: one for the observer callback to schedule, one for the deferred write.
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }

    it('grows and shrinks with the content', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea resize="auto"></sl-textarea> `);
      await settle(el);
      // Measure the host, not the inner textarea: the inner one shrinks even when the size
      // adjuster keeps the wrapper pinned to the previous larger height.
      const initialHeight = el.getBoundingClientRect().height;

      el.value = 'one\ntwo\nthree\nfour\nfive\nsix\nseven\neight';
      await settle(el);
      const grownHeight = el.getBoundingClientRect().height;
      expect(grownHeight).to.be.greaterThan(initialHeight);

      el.value = 'one';
      await settle(el);
      expect(el.getBoundingClientRect().height).to.be.lessThan(grownHeight);
    });

    it('respects a max-height on the textarea instead of growing the wrapper past it', async () => {
      const maxHeight = 120;
      const el = await fixture<SlTextarea>(html` <sl-textarea resize="auto"></sl-textarea> `);
      const style = document.createElement('style');
      style.textContent = `sl-textarea::part(textarea) { max-height: ${maxHeight}px; }`;
      document.head.append(style);

      try {
        await settle(el);
        el.value = Array.from({ length: 30 }, (_, i) => `line ${i}`).join('\n');
        await settle(el);

        // The adjuster shares the grid cell, so syncing it to the unclamped scrollHeight would
        // inflate the wrapper around a textarea that is itself capped.
        expect(el.getBoundingClientRect().height).to.be.lessThan(maxHeight * 2);
      } finally {
        style.remove();
      }
    });

    it('sizes to its content when revealed after being hidden', async () => {
      const wrapper = await fixture<HTMLDivElement>(html`
        <div style="display: none">
          <sl-textarea
            resize="auto"
            value="one
two
three
four
five"
          ></sl-textarea>
        </div>
      `);
      const el = wrapper.querySelector<SlTextarea>('sl-textarea')!;
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('.textarea__control')!;
      await settle(el);

      const recorder = recordResizeObserverLoopErrors();
      wrapper.style.display = '';
      await settle(el);
      recorder.stop();

      expect(textarea.clientHeight).to.be.greaterThan(0);
      expect(recorder.seen).to.deep.equal([]);
    });

    it('does not report a ResizeObserver loop when the width changes repeatedly', async () => {
      const wrapper = await fixture<HTMLDivElement>(html`
        <div style="width: 400px">
          <sl-textarea resize="auto" value="some wrapping content that reflows"></sl-textarea>
        </div>
      `);
      const el = wrapper.querySelector<SlTextarea>('sl-textarea')!;
      await settle(el);

      const recorder = recordResizeObserverLoopErrors();
      for (const width of ['200px', '360px', '150px', '400px']) {
        wrapper.style.width = width;
        await settle(el);
      }
      recorder.stop();

      expect(recorder.seen).to.deep.equal([]);
    });

    it('stops observing when resize changes away from auto', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea resize="auto"></sl-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('.textarea__control')!;
      await settle(el);

      el.resize = 'none';
      await settle(el);
      expect(textarea.style.height).to.equal('');

      // A width change must no longer drive an auto-size write now that resize is "none".
      el.style.width = '200px';
      await settle(el);
      expect(textarea.style.height).to.equal('');
    });

    it('cancels a queued height update when disconnected', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea resize="auto"></sl-textarea> `);
      await settle(el);

      // Spying the instance method is what makes this assert the cancel rather than a side effect.
      const setHeight = sinon.spy(el as unknown as { setTextareaHeight: () => void }, 'setTextareaHeight');
      el.style.width = '120px';
      el.remove();
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      // callCount, not `.to.not.have.been.called`: the latter hangs the runner for 240s on
      // failure instead of failing, which would hide every test in this file.
      expect(setHeight.callCount).to.equal(0);
      setHeight.restore();
    });
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea></sl-textarea> `);

      expect(el.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea required></sl-textarea> `);

      expect(el.checkValidity()).to.be.false;
    });

    it('should be invalid when required and after removing disabled ', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea disabled required></sl-textarea> `);

      el.disabled = false;
      await el.updateComplete;

      expect(el.checkValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea disabled required></sl-textarea> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea required value="a"></sl-textarea> `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await sendKeys({ press: 'b' });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea required></sl-textarea> `);

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await sendKeys({ press: 'a' });
      await sendKeys({ press: 'Backspace' });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html` <form novalidate><sl-textarea required></sl-textarea></form> `);
      const textarea = el.querySelector<SlTextarea>('sl-textarea')!;

      expect(textarea.hasAttribute('data-required')).to.be.true;
      expect(textarea.hasAttribute('data-optional')).to.be.false;
      expect(textarea.hasAttribute('data-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-valid')).to.be.false;
      expect(textarea.hasAttribute('data-user-invalid')).to.be.false;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sl-textarea name="a" value="1"></sl-textarea></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sl-textarea name="a" value="1"></sl-textarea></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const textarea = await fixture<HTMLFormElement>(html` <sl-textarea></sl-textarea> `);

      textarea.setCustomValidity('Invalid selection');
      await textarea.updateComplete;

      expect(textarea.checkValidity()).to.be.false;
      expect(textarea.hasAttribute('data-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-valid')).to.be.false;
      expect(textarea.hasAttribute('data-user-invalid')).to.be.false;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;

      textarea.focus();
      await sendKeys({ type: 'test' });
      await textarea.updateComplete;
      textarea.blur();
      await textarea.updateComplete;

      expect(textarea.hasAttribute('data-user-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sl-button type="submit">Submit</sl-button>
          </form>
          <sl-textarea form="f" name="a" value="1"></sl-textarea>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sl-textarea name="a" value="test"></sl-textarea>
          <sl-button type="reset">Reset</sl-button>
        </form>
      `);
      const button = form.querySelector('sl-button')!;
      const textarea = form.querySelector('sl-textarea')!;
      textarea.value = '1234';

      await textarea.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('test');

      textarea.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('');
    });
  });

  describe('when using spellcheck', () => {
    it('should enable spellcheck when no attribute is present', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea></sl-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea spellcheck="true"></sl-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea spellcheck="false"></sl-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('false');
      expect(textarea.spellcheck).to.be.false;
    });
  });

  describe('when using the setRangeText() function', () => {
    it('should set replacement text in the correct location', async () => {
      const el = await fixture<SlTextarea>(html` <sl-textarea value="test"></sl-textarea> `);

      el.focus();
      el.setSelectionRange(1, 3);
      el.setRangeText('boom');
      await el.updateComplete;
      expect(el.value).to.equal('tboomt'); // cspell:disable-line
    });
  });

  runFormControlBaseTests('sl-textarea');
});
