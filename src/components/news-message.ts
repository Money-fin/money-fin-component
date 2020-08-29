import { LitElement, html, TemplateResult } from 'lit-element';
import style from './news-message.style';
import { IconBot } from '../icons/icons';

export class NewsMessage extends LitElement {
  static styles = [style];

  render(): TemplateResult {
    return html`
      <div class="wrap">
        <div class="profile">${IconBot}</div>
        <span class="chat-message__arrow chat-message__arrow--left"></span>
        <p class="chat-message">
          ${this.calendarTemplate(`08/28(Fri)`, `17:40`)}
        </p>
      </div>
    `;
  }

  calendarTemplate(date: string, time: string): TemplateResult {
    return html`
      <div class="news">
        ${date}
        <em>${time}</em>
      </div>
    `;
  }
}

customElements.define('news-message', NewsMessage);
