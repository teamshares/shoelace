---
meta:
  title: Dialog
  description: 'Dialogs, also called "modals", appear above the page and require the user''s immediate attention.'
layout: component
guidelines: |
  ### Dialog Headers

  - Keep headers **short** and **succinct**
  - Use **sentence case**
  - **Don't** wrap headers to multiple lines
    - To prevent wrapping, keep header text short. If the shortened text still wraps, try using a larger dialog width.

  ### Confirmation Dialogs

  **Header text should...**

  - Restate the action you are asking people to confirm
  - End with a question mark
  - **Not** ask "Are you sure...?"

  **Body text should...**
  - Tell people the impact of the action they are about to take
  - **Not** just repeat the header
  - **Not** ask "Are you sure...?"
  - **Not** say "You are about to..."

  **Dialog's primary button text should...**
  - Restate the action, either repeating the header or a shortened form of the header
  - **Not** use ambiguous words like "Confirm" or "Okay"

  :::tip
  **Do**
  ![Do](/../../assets/images/confirm-dialog-DO.png "Do")
  ![Do](/../../assets/images/confirm-dialog-DO-2.png "Do")
  - Do keep the header short and restate the action you want people to confirm
  - Do repeat the header in the primary button
  - Do end with a question mark
  :::

  :::danger 
  **Don't**
  ![Don't](/../../assets/images/confirm-dialog-DONT.png "Don't")
  ![Don't](/../../assets/images/confirm-dialog-DONT-2.png "Don't")
  - Don't wrap the header to multiple lines
  - Don't use title case
  - Don't ask "are you sure," in the header or the body
  - Don't use ambiguous button text like "Confirm" or "Don't confirm"
  :::
---

## Examples

### Basic Dialog

A basic dialog has a header, body, and footer with one or more buttons that people can use to either move forward with an action or dismiss the dialog.

Use the `label` attribute to add a dialog header. Add `slot="footer"` to each button you want to appear in the dialog's footer.

```html:preview
<sl-dialog label="Dialog header" class="dialog-basic">
  This is the dialog’s body.
  <sl-button slot="footer" variant="default">Secondary button</sl-button>
  <sl-button slot="footer" variant="primary">Primary button</sl-button>
</sl-dialog>

<sl-button>Open basic dialog</sl-button>

<script>
  const dialog = document.querySelector('.dialog-basic');
  const openButton = dialog.nextElementSibling;
  const footerButtons = dialog.querySelectorAll('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  footerButtons.forEach(button => {
    button.addEventListener('click', () => dialog.hide());
  });
</script>
```

```pug:slim
sl-dialog label="Dialog header" class="dialog-basic"
  | This is the dialog’s body.
  sl-button slot="footer" variant="default" Secondary button
  sl-button slot="footer" variant="primary" Primary button
sl-button Open basic dialog

javascript:
  const dialog = document.querySelector(.dialog-basic);
  const openButton = dialog.nextElementSibling;
  const footerButtons = dialog.querySelectorAll(sl-button[slot=footer]);

  openButton.addEventListener(click, () => dialog.show());
  footerButtons.forEach(button => {
    button.addEventListener('click', () => dialog.hide());
  });
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Basic Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <SlButton slot="footer" variant="default" onClick={() => setOpen(false)}>
          Cancel
        </SlButton>
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Dialog with Header Icon

Use the `header-icon` slot to display an `sl-icon` to the left of the dialog header (`label`).

Use this pattern for confirmation dialogs, when asking people to confirm that they want to take an action, and for informational dialogs.

Set the dialog variant (`default` or `warning`) to apply the right color theme to the icon: `default` for confirmation of neutral actions (like submitting a form), and `warning` for confirmation of destructive actions (like canceling or deleting something).

```html:preview
<sl-dialog label="More about vesting" class="dialog-default-info" variant="default">
  <sl-icon library="fa" name="info-circle" slot="header-icon"></sl-icon>
  <div class="ts-heading-7">What is vesting?</div>
  <div style="margin-top: .75rem;">Vesting refers to the process by which an employee gains ownership rights over employer-provided stock or stock options over a specified period of time.</div>
  <div style="margin-top: .75rem;">This is often contingent upon meeting certain conditions such as continued employment or achieving performance milestones.</div>
</sl-dialog>

<sl-button variant="primary">Open default informational dialog</sl-button>
<br />
<br />

<sl-dialog label="Submit request?" class="dialog-default-confirm" variant="default">
  <sl-icon library="fa" name="exclamation-circle" slot="header-icon"></sl-icon>
  If you need to, you can cancel this request after submitting it.
  <sl-button slot="footer" variant="default">Cancel</sl-button>
  <sl-button slot="footer" variant="primary">Submit request</sl-button>
</sl-dialog>

<sl-button variant="primary">Open default confirmation dialog</sl-button>
<br />
<br />

<sl-dialog label="Cancel request?" class="dialog-warning" variant="warning">
  <sl-icon library="fa" name="exclamation-triangle" slot="header-icon"></sl-icon>
  You can't undo this action. You'll need to create a new request.
  <sl-button slot="footer" variant="default">Keep request</sl-button>
  <sl-button slot="footer" variant="warning">Cancel request</sl-button>
</sl-dialog>

<sl-button variant="warning">Open warning confirmation dialog</sl-button>

<script>
  const dialogDefaultInfo = document.querySelector('.dialog-default-info');
  const openDialogDefaultInfo = dialogDefaultInfo.nextElementSibling;

  openDialogDefaultInfo.addEventListener('click', () => dialogDefaultInfo.show());

  const dialogDefaultConfirm = document.querySelector('.dialog-default-confirm');
  const openDialogDefaultConfirm = dialogDefaultConfirm.nextElementSibling;
  const footerButtonsDefault = dialogDefaultConfirm.querySelectorAll('sl-button[slot="footer"]');

  openDialogDefaultConfirm.addEventListener('click', () => dialogDefaultConfirm.show());
  footerButtonsDefault.forEach(button => {
    button.addEventListener('click', () => dialogDefaultConfirm.hide());
  });

  const dialogWarning = document.querySelector('.dialog-warning');
  const openDialogWarning = dialogWarning.nextElementSibling;
  const footerButtonsWarning = dialogWarning.querySelectorAll('sl-button[slot="footer"]');

  openDialogWarning.addEventListener('click', () => dialogWarning.show());
  footerButtonsWarning.forEach(button => {
    button.addEventListener('click', () => dialogWarning.hide());
  });
</script>
```

```pug:slim
sl-dialog label="More about vesting" class="dialog-default-info" variant="default"
  sl-icon library="fa" name="info-circle" slot="header-icon"
  div[class="ts-heading-7"] What is vesting?
  div[style="margin-top: .75rem;"] Vesting refers to the process by which an employee gains ownership rights over employer-provided stock or stock options over a specified period of time.
  div[style="margin-top: .75rem;"] This is often contingent upon meeting certain conditions such as continued employment or achieving performance milestones.

sl-button Open default informational dialog
br
br

sl-dialog label="Submit request?" class="dialog-default" variant="default"
  sl-icon library="fa" name="exclamation-circle" slot="header-icon"
  | If you need to, you can cancel this request after submitting it.
  sl-button slot="footer" variant="default" Cancel
  sl-button slot="footer" variant="primary" Submit request

sl-button Open default confirmation dialog
br
br

sl-dialog label="Cancel request?" class="dialog-warning" variant="warning"
  sl-icon library="fa" name="exclamation-triangle" slot="header-icon"
  | You can't undo this action. You'll need to create a new request.
  sl-button slot="footer" variant="default" Keep request
  sl-button slot="footer" variant="warning" Cancel request

sl-button Open warning confirmation dialog

javascript:
  document.addEventListener('DOMContentLoaded', () => {
    const dialogDefaultInfo = document.querySelector('.dialog-default-info');
    const openDialogDefaultInfo = dialogDefaultInfo.nextElementSibling;

    openDialogDefaultInfo.addEventListener('click', () => dialogDefaultInfo.show());

    const dialogDefaultConfirm = document.querySelector('.dialog-default-confirm');
    const openDialogDefaultConfirm = dialogDefaultConfirm.nextElementSibling;
    const footerButtonsDefault = dialogDefaultConfirm.querySelectorAll('sl-button[slot="footer"]');

    openDialogDefaultConfirm.addEventListener('click', () => dialogDefaultConfirm.show());
    footerButtonsDefault.forEach(button => {
      button.addEventListener('click', () => dialogDefaultConfirm.hide());
    });

    const dialogWarning = document.querySelector('.dialog-warning');
    const openDialogWarning = dialogWarning.nextElementSibling;
    const footerButtonsWarning = dialogWarning.querySelectorAll('sl-button[slot="footer"]');

    openDialogWarning.addEventListener('click', () => dialogWarning.show());
    footerButtonsWarning.forEach(button => {
      button.addEventListener('click', () => dialogWarning.hide());
    });
  });
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlIcon from '@teamshares/shoelace/dist/react/icon';

const App = () => {
  const [dialogDefaultOpen, setDialogDefaultOpen] = useState(false);
  const [dialogWarningOpen, setDialogWarningOpen] = useState(false);

  const toggleDialogDefault = () => setDialogDefaultOpen(!dialogDefaultOpen);
  const toggleDialogWarning = () => setDialogWarningOpen(!dialogWarningOpen);

  return (
    <>
      <SlDialog label="Submit request?" class="dialog-default" variant="default" open={dialogDefaultOpen}>
        <SlIcon library="fa" name="circle-info" slot="header-icon" />
        If you need to, you'll be able to cancel this request after submitting it.
        <SlButton slot="footer" variant="default" onClick={toggleDialogDefault}>
          Cancel
        </SlButton>
        <SlButton slot="footer" variant="primary" onClick={toggleDialogDefault}>
          Submit request
        </SlButton>
      </SlDialog>
      <SlButton onClick={toggleDialogDefault}>Open default dialog</SlButton>

      <SlDialog label="Cancel request?" class="dialog-warning" variant="warning" open={dialogWarningOpen}>
        <SlIcon library="fa" name="exclamation-triangle" slot="header-icon" />
        You can't undo this action. You'll need to create a new request.
        <SlButton slot="footer" variant="default" onClick={toggleDialogWarning}>
          Keep request
        </SlButton>
        <SlButton slot="footer" variant="warning" onClick={toggleDialogWarning}>
          Cancel request
        </SlButton>
      </SlDialog>
      <SlButton onClick={toggleDialogWarning}>Open warning dialog</SlButton>
    </>
  );
};
```

:::tip
**For each dialog type, use a specific dialog variant, button variant, and header icon:**
| Dialog type | Dialog variant | Button variant | Header icon |
| ------------ | ----------- | -------------- | ---------------------- |
| informational | `default` | `primary` | `info-circle` |
| default confirmation | `default` | `primary` | `exclamation-circle` |
| warning confirmation | `warning` | `warning` | `exclamation-triangle` |
:::

### Announcement Dialog

Use the `announcement` variant to display a dialog with a large icon, more text, and a centered layout. This type of dialog can be useful for announcing new features.

:::warning
**Note:** The `announcement` variant is meant to be used with positive or celebratory messages. **Don't use** this dialog for errors, warnings, or confirmation.
:::

```html:preview
<sl-dialog label="Meet your new Monthly Numbers dashboard" class="dialog-announcement" variant="announcement">
  <div slot="announcement-intro">Welcome!</div>
  <sl-icon library="fa" name="fal-party-horn" slot="header-icon"></sl-icon>
  Track your company's revenue, gross profit, and operating profit over the past month, quarter, and year, all on one page.
  <sl-button slot="footer" variant="primary" size="large">Let me explore</sl-button>
  <div slot="footer-text"><a href="#">Learn more about Monthly Numbers</a></div>
</sl-dialog>

<sl-button>Open announcement dialog</sl-button>

<script>
  const dialogAnnouncement = document.querySelector('.dialog-announcement');
  const openDialogAnnouncement = dialogAnnouncement.nextElementSibling;
  const footerButtonsAnnouncement = dialogAnnouncement.querySelectorAll('sl-button[slot="footer"]');

  openDialogAnnouncement.addEventListener('click', () => dialogAnnouncement.show());
  footerButtonsAnnouncement.forEach(button => {
    button.addEventListener('click', () => dialogAnnouncement.hide());
  });
</script>
```

```pug:slim
sl-dialog label="Meet your new Monthly Numbers dashboard" class="dialog-announcement" variant="announcement"
  div slot="announcement-intro" Welcome!
  sl-icon library="fa" name="fal-party-horn" slot="header-icon"
  | Track your company's revenue, gross profit, and operating profit over the past month, quarter, and year, all on one page.
  sl-button slot="footer" variant="primary" size="large" Let me explore
  div slot="footer-text"
    a href="#" Learn more about Monthly Numbers

sl-button Open announcement dialog

script.
  const dialogAnnouncement = document.querySelector('.dialog-announcement');
  const openDialogAnnouncement = dialogAnnouncement.nextElementSibling;
  const footerButtonsAnnouncement = dialogAnnouncement.querySelectorAll('sl-button[slot="footer"]');

  openDialogAnnouncement.addEventListener('click', () => dialogAnnouncement.show());
  footerButtonsAnnouncement.forEach(button => {
    button.addEventListener('click', () => dialogAnnouncement.hide());
  });
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlIcon from '@teamshares/shoelace/dist/react/icon';

const App = () => {
  const dialogAnnouncement = useRef(null);

  useEffect(() => {
    const openDialogAnnouncement = document.querySelector('.dialog-announcement + sl-button');
    const footerButtonsAnnouncement = document.querySelectorAll('.dialog-announcement sl-button[slot="footer"]');

    openDialogAnnouncement.addEventListener('click', () => dialogAnnouncement.current.show());
    footerButtonsAnnouncement.forEach(button => {
      button.addEventListener('click', () => dialogAnnouncement.current.hide());
    });
  }, []);

  return (
    <>
      <SlDialog ref={dialogAnnouncement} label="Meet your new Monthly Numbers dashboard" class="dialog-announcement" variant="announcement">
        <div slot="announcement-intro">Welcome!</div>
        <SlIcon library="fa" name="fal-party-horn" slot="header-icon" />
        Track your company's revenue, gross profit, and operating profit over the past month, quarter, and year, all on one page.
        <SlButton slot="footer" variant="primary" size="large">Let me explore</SlButton>
        <div slot="footer-text"><a href="#">Learn more about Monthly Numbers</a></div>
      </SlDialog>

      <SlButton>Open announcement dialog</SlButton>
    </>
  );
};
```

### Dialog Widths

Use the `size` property to set a dialog's width.

:::warning
**Note:** A `--width` custom property is also available, but opt to use one of the pre-defined sizes — `small` (25rem or 400px), `medium` (30rem or 480px), `large` (37.5rem or 600px) — whenever possible.
:::

```html:preview
<sl-dialog label="Small dialog" class="dialog-small" size="small">
  <sl-icon library="fa" name="exclamation-circle" slot="header-icon"></sl-icon>
  This is a small dialog.
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open small dialog</sl-button>

<sl-dialog label="Medium dialog" class="dialog-medium" size="medium">
  <sl-icon library="fa" name="exclamation-circle" slot="header-icon"></sl-icon>
  This is a medium dialog. Medium is the dialog’s default size.
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open medium dialog</sl-button>

<sl-dialog label="Large dialog" class="dialog-large" size="large">
  <sl-icon library="fa" name="exclamation-circle" slot="header-icon"></sl-icon>
  This is a large dialog.
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open large dialog</sl-button>

<script>
  const dialogSmall = document.querySelector('.dialog-small');
  const openButtonSmallDialog = dialogSmall.nextElementSibling;
  const closeButtonSmallDialog = dialogSmall.querySelector('sl-button[slot="footer"]');

  openButtonSmallDialog.addEventListener('click', () => dialogSmall.show());
  closeButtonSmallDialog.addEventListener('click', () => dialogSmall.hide());

  const dialogMedium = document.querySelector('.dialog-medium');
  const openButtonMediumDialog = dialogMedium.nextElementSibling;
  const closeButtonMediumDialog = dialogMedium.querySelector('sl-button[slot="footer"]');

  openButtonMediumDialog.addEventListener('click', () => dialogMedium.show());
  closeButtonMediumDialog.addEventListener('click', () => dialogMedium.hide());

  const dialogLarge = document.querySelector('.dialog-large');
  const openButtonLargeDialog = dialogLarge.nextElementSibling;
  const closeButtonLargeDialog = dialogLarge.querySelector('sl-button[slot="footer"]');

  openButtonLargeDialog.addEventListener('click', () => dialogLarge.show());
  closeButtonLargeDialog.addEventListener('click', () => dialogLarge.hide());
</script>
```

```pug:slim
sl-dialog(label="Small dialog" class="dialog-small" size="small")
  | This is a small dialog.
  sl-button(slot="footer" variant="primary") Close

sl-button Open small dialog

sl-dialog(label="Medium dialog" class="dialog-medium" size="medium")
  | This is a medium dialog. Medium is the dialog’s default size.
  sl-button(slot="footer" variant="primary") Close

sl-button Open medium dialog

sl-dialog(label="Large dialog" class="dialog-large" size="large")
  | This is a large dialog.
  sl-button(slot="footer" variant="primary") Close

sl-button Open large dialog

javascript:
  document.addEventListener('DOMContentLoaded', () => {
  const dialogSmall = document.querySelector('.dialog-small');
  const openButtonSmallDialog = dialogSmall.nextElementSibling;
  const closeButtonSmallDialog = dialogSmall.querySelector('sl-button[slot="footer"]');

  openButtonSmallDialog.addEventListener('click', () => dialogSmall.show());
  closeButtonSmallDialog.addEventListener('click', () => dialogSmall.hide());

  const dialogMedium = document.querySelector('.dialog-medium');
  const openButtonMediumDialog = dialogMedium.nextElementSibling;
  const closeButtonMediumDialog = dialogMedium.querySelector('sl-button[slot="footer"]');

  openButtonMediumDialog.addEventListener('click', () => dialogMedium.show());
  closeButtonMediumDialog.addEventListener('click', () => dialogMedium.hide());

  const dialogLarge = document.querySelector('.dialog-large');
  const openButtonLargeDialog = dialogLarge.nextElementSibling;
  const closeButtonLargeDialog = dialogLarge.querySelector('sl-button[slot="footer"]');

  openButtonLargeDialog.addEventListener('click', () => dialogLarge.show());
  closeButtonLargeDialog.addEventListener('click', () => dialogLarge.hide());
  });
```

{% raw %}

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';

const App = () => {
  const [smallDialogOpen, setSmallDialogOpen] = useState(false);
  const [largeDialogOpen, setLargeDialogOpen] = useState(false);

  return (
    <>
      <sl-dialog label="Small dialog" className="dialog-small" size="small" open={smallDialogOpen}>
        This is a small dialog.
        <SlButton slot="footer" variant="primary" onClick={() => setSmallDialogOpen(false)}>
          Close
        </SlButton>
      </sl-dialog>

      <SlButton onClick={() => setSmallDialogOpen(true)}>Open small dialog</SlButton>

      <sl-dialog label="Large dialog" className="dialog-large" size="large" open={largeDialogOpen}>
        This is a large dialog.
        <SlButton slot="footer" variant="primary" onClick={() => setLargeDialogOpen(false)}>
          Close
        </SlButton>
      </sl-dialog>

      <SlButton onClick={() => setLargeDialogOpen(true)}>Open large dialog</SlButton>
    </>
  );
};
```

{% endraw %}

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html:preview
<sl-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open scrolling dialog</sl-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```pug:slim
sl-dialog label="Dialog" class="dialog-scrolling"
  div style="height: 150vh; border: dashed 2px var(--sl-color-neutral-200); padding: 0 1rem;"
    p Scroll down and give it a try! 👇
  sl-button slot="footer" variant="primary" Close
sl-button Open scrolling dialog

javascript:
  const dialog = document.querySelector(.dialog-scrolling);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(sl-button[slot=footer]);

  openButton.addEventListener(click, () => dialog.show());
  closeButton.addEventListener(click, () => dialog.hide());
```

{% raw %}

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <div
          style={{
            height: '150vh',
            border: 'dashed 2px var(--sl-color-neutral-200)',
            padding: '0 1rem'
          }}
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>

        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

{% endraw %}

### Dialog as Wrapper

To use the dialog as a simple wrapper, for a loading UI, for example, use the `noHeader` attribute and skip adding anything to the `footer` slot. Additional custom classes can be used to position the spinner and add any additional text, as in the example below. Be sure to add a script to **prevent the dialog from closing** when the user clicks on the overlay (see example code).

```html:preview
<sl-dialog size="small" no-header class="spinner-dialog">
  <div class="wrapper">
    <div class="ts-heading-6">Cancelling the transaction</div>
    <sl-spinner size="x-large">
  </div>
</sl-dialog>

<sl-button>Open wrapper dialog</sl-button>

<script>
  const dialog = document.querySelector('.spinner-dialog');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => dialog.show());

  // If using as a loader, use script to prevent the dialog from closing when the user clicks on the overlay
  /* dialog.addEventListener('sl-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }); */
</script>

<style>
  .wrapper {
    text-align: center;
    padding-top: 2rem;
  }

  .wrapper div:first-child {
    padding-bottom: 2rem;
  }
  </style>
```

```pug:slim
sl-dialog size="small" no-header class="spinner-dialog"
  .wrapper
    div class="ts-heading-6" Cancelling the transaction
    sl-spinner size=""x-large"

sl-button Open wrapper dialog

javascript:
  const dialog = document.querySelector(.dialog-header-actions);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(click, () => dialog.show());

// If using as a loader, use below script to prevent the dialog from closing when the user clicks on the overlay
  /* dialog.addEventListener('sl-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }); */

css:
  .wrapper {
    text-align: center;
    padding-top: 2rem;
  }

  .wrapper div:first-child {
    padding-bottom: 2rem;
  }
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlIconButton from '@teamshares/shoelace/dist/react/icon-button';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <SlIconButton
          class="new-window"
          slot="header-actions"
          name="arrow-top-right-on-square"
          onClick={() => window.open(location.href)}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Dialog with No Footer

Footer buttons are optional. Omit passing any buttons to the `footer` slot to create a dialog with no footer.

```html:preview
<sl-dialog label="More about vesting" class="dialog-no-footer" variant="default">
  <sl-icon library="fa" name="info-circle" slot="header-icon"></sl-icon>
  <div class="ts-heading-7">What is vesting?</div>
  <div style="margin-top: .75rem;">Vesting refers to the process by which an employee gains ownership rights over employer-provided stock or stock options over a specified period of time.</div>
  <div style="margin-top: .75rem;">This is often contingent upon meeting certain conditions such as continued employment or achieving performance milestones.</div>
</sl-dialog>

<sl-button variant="primary">Open dialog with no footer</sl-button>

<script>
  const dialogNoFooter = document.querySelector('.dialog-no-footer');
  const openDialogNoFooter = dialogNoFooter.nextElementSibling;

  openDialogNoFooter.addEventListener('click', () => dialogNoFooter.show());
</script>
```

```pug:slim
sl-dialog label="More about vesting" class="dialog-default-info" variant="default"
  sl-icon library="fa" name="info-circle" slot="header-icon"
  div[class="ts-heading-7"] What is vesting?
  div[style="margin-top: .75rem;"] Vesting refers to the process by which an employee gains ownership rights over employer-provided stock or stock options over a specified period of time.
  div[style="margin-top: .75rem;"] This is often contingent upon meeting certain conditions such as continued employment or achieving performance milestones.

sl-button Open dialog with no footer
br
br

javascript:
  document.addEventListener('DOMContentLoaded', () => {
    const dialogNoFooter = document.querySelector('.dialog-no-footer');
    const openDialogNoFooter = dialogNoFooter.nextElementSibling;

    openDialogNoFooter.addEventListener('click', () => dialogNoFooter.show());
  });
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlIcon from '@teamshares/shoelace/dist/react/icon';

const App = () => {
  const [dialogDefaultOpen, setDialogDefaultOpen] = useState(false);
  const [dialogWarningOpen, setDialogWarningOpen] = useState(false);

  const toggleDialogDefault = () => setDialogDefaultOpen(!dialogDefaultOpen);
  const toggleDialogWarning = () => setDialogWarningOpen(!dialogWarningOpen);

  return (
    <>
      <SlDialog label="Submit request?" class="dialog-default" variant="default" open={dialogDefaultOpen}>
        <SlIcon library="fa" name="circle-info" slot="header-icon" />
        If you need to, you'll be able to cancel this request after submitting it.
        <SlButton slot="footer" variant="default" onClick={toggleDialogDefault}>
          Cancel
        </SlButton>
        <SlButton slot="footer" variant="primary" onClick={toggleDialogDefault}>
          Submit request
        </SlButton>
      </SlDialog>
      <SlButton onClick={toggleDialogDefault}>Open default dialog</SlButton>

      <SlDialog label="Cancel request?" class="dialog-warning" variant="warning" open={dialogWarningOpen}>
        <SlIcon library="fa" name="exclamation-triangle" slot="header-icon" />
        You can't undo this action. You'll need to create a new request.
        <SlButton slot="footer" variant="default" onClick={toggleDialogWarning}>
          Keep request
        </SlButton>
        <SlButton slot="footer" variant="warning" onClick={toggleDialogWarning}>
          Cancel request
        </SlButton>
      </SlDialog>
      <SlButton onClick={toggleDialogWarning}>Open warning dialog</SlButton>
    </>
  );
};
```

### Header Actions

The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/components/icon-button) if needed.

:::warning
Dialogs with header actions are currently not part of the Teamshares Design System, and there is no Figma component for this option. Please check with the design team before using this option.
:::

```html:preview
<sl-dialog label="Dialog" class="dialog-header-actions">
  <sl-icon-button class="new-window" slot="header-actions" library="fa" name="arrow-up-right-from-square"></sl-icon-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open dialog with header actions</sl-button>

<script>
  const dialog = document.querySelector('.dialog-header-actions');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');
  const newWindowButton = dialog.querySelector('.new-window');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

```pug:slim
sl-dialog label="Dialog" class="dialog-header-actions"
  sl-icon-button class="new-window" slot="header-actions" name="arrow-top-right-on-square"
  | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  sl-button slot="footer" variant="primary" Close
sl-button Open dialog with header actions

javascript:
  const dialog = document.querySelector(.dialog-header-actions);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(sl-button[slot=footer]);
  const newWindowButton = dialog.querySelector(.new-window);

  openButton.addEventListener(click, () => dialog.show());
  closeButton.addEventListener(click, () => dialog.hide());
  newWindowButton.addEventListener(click, () => window.open(location.href));
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlIconButton from '@teamshares/shoelace/dist/react/icon-button';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <SlIconButton
          class="new-window"
          slot="header-actions"
          name="arrow-top-right-on-square"
          onClick={() => window.open(location.href)}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `sl-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it.

```html:preview
<sl-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-dialog>

<sl-button>Open dialog</sl-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('sl-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

```pug:slim
sl-dialog label="Dialog" class="dialog-deny-close"
  | This dialog will not close when you click on the overlay.
  sl-button slot="footer" variant="primary" Close
sl-button Open dialog

javascript:
  const dialog = document.querySelector(.dialog-deny-close);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(sl-button[slot=footer]);

  openButton.addEventListener(click, () => dialog.show());
  closeButton.addEventListener(click, () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener(sl-request-close, event => {
    if (event.detail.source === overlay) {
      event.preventDefault();
    }
  });
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';

const App = () => {
  const [open, setOpen] = useState(false);

  // Prevent the dialog from closing when the user clicks on the overlay
  function handleRequestClose(event) {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  }

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlRequestClose={handleRequestClose} onSlAfterHide={() => setOpen(false)}>
        This dialog will not close when you click on the overlay.
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

Wen presenting a dialog with an input, `autofocus` should be added to the input so that people don't have to click or tab into the input.

```html:preview
<sl-dialog label="Grant access?" class="dialog-focus">
  <sl-icon library="fa" name="exclamation-circle" slot="header-icon"></sl-icon>
  <p style="margin: 0 0 1rem">To grant this user access to financial products, enter a mobile number to be used for login verification.</p>
  <sl-input autofocus label="Mobile number" type="tel" optional-icon required></sl-input>
  <sl-button slot="footer" variant="default">Cancel</sl-button>
  <sl-button slot="footer" variant="primary">Grant access</sl-button>
</sl-dialog>

<sl-button>Open form dialog</sl-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('sl-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```pug:slim
sl-dialog label="Grant access?" class="dialog-focus"
  sl-icon library="fa" name="exclamation-circle" slot="header-icon"
  p style="margin: 0 0 1rem" To grant this user access to financial products, enter a mobile number to be used for login verification.
  sl-input autofocus=true label="Mobile number" type="tel" optional-icon=true required=true
  sl-button slot="footer" variant="default" Cancel
  sl-button slot="footer" variant="primary" Grant access
sl-button Open form dialog

javascript:
  const dialog = document.querySelector(.dialog-focus);
  const input = dialog.querySelector(sl-input);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(sl-button[slot=footer]);

  openButton.addEventListener(click, () => dialog.show());
  closeButton.addEventListener(click, () => dialog.hide());
```

```jsx:react
import { useState } from 'react';
import SlButton from '@teamshares/shoelace/dist/react/button';
import SlDialog from '@teamshares/shoelace/dist/react/dialog';
import SlInput from '@teamshares/shoelace/dist/react/input';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <SlInput autofocus placeholder="I will have focus when the dialog is opened" />
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

:::tip
You can further customize initial focus behavior by canceling the `sl-initial-focus` event and setting focus yourself inside the event handler.
:::
