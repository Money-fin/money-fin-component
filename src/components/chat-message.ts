import { LitElement, html, TemplateResult, property } from 'lit-element';
import style from './chat-message.style';
import { IconBot } from '../icons/icons';

export class ChatMessage extends LitElement {
  @property({ type: String, reflect: true })
  who: `BOT` | `ME` = `BOT`;

  @property({ type: String, reflect: true })
  message = ``;

  static styles = [style];

  render(): TemplateResult {
    if (this.who === `ME`) {
      return html`
        <div class="wrap me">
          <p class="chat-message me">${this.message}</p>
          <span class="chat-message__arrow chat-message__arrow--right"></span>
        </div>
      `;
    }

    return html`
      <div class="wrap">
        <div class="profile">${IconBot}</div>
        <span class="chat-message__arrow chat-message__arrow--left"></span>
        <p class="chat-message">${this.message}</p>
      </div>
    `;
  }
}

customElements.define('chat-message', ChatMessage);
