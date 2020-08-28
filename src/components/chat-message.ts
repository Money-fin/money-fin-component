import { LitElement, html, TemplateResult, property } from 'lit-element';
import style from './chat-message.style';
import { IconBot } from '../icons/icons';

export class ChatMessage extends LitElement {
  @property({ type: String, reflect: true })
  message = `Hello`;

  static styles = [style];

  render(): TemplateResult {
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
