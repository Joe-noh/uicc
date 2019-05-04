import { document, console } from 'global'
import { storiesOf } from '@storybook/html'
import '../packages/button'

storiesOf('Button', module)
  .add('Types', () => {
    return `
      <uicc-button>Normal</uicc-button>
      <uicc-button outline="outline">Outline</uicc-button>
      <uicc-button disabled="disabled">Disabled</uicc-button>
      <uicc-button outline="outline" disabled="disabled">Outline & Disabled</uicc-button>
    `
  })
  .add('createElement example', () => {
    const button = document.createElement('uicc-button')
    button.innerText = 'Hello Button'
    button.addEventListener('click', e => console.log(e))

    return button
  })
