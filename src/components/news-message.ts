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
        <div class="chat-message">
          ${this.scoreBoxTemplate(10.2)}
          <div class="calendarAndNews">
            ${this.calendarTemplate(`08/28(Fri)`, `17:40`)}
            ${this.newsTemplate(`Title`, `Description`)}
          </div>

          <div class="table-header">종목 연관성</div>
          ${this.tableBoxTemplate(`화학`, 0.7)}
          ${this.tableBoxTemplate(`생명`, 0.3)}
          ${this.tableBoxTemplate(`정보통신`, 0.2)}
        </div>
      </div>
    `;
  }

  scoreBoxTemplate(score: number): TemplateResult {
    return html`
      <div class="score-box">
        <span class="item">호재 지수</span>
        <span class="score">${score}</span>
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

  newsTemplate(title: string, desc: string): TemplateResult {
    return html`
      <span class="news-content">
        <div class="news-title">${title}</div>
        <div class="news-desc">${desc}</div>
      </span>
    `;
  }

  tableBoxTemplate(name: string, score: number): TemplateResult {
    return html`
      <div class="table-box">
        <span class="item">${name}</span>
        <span class="score">${score}</span>
      </div>
    `;
  }
}

customElements.define('news-message', NewsMessage);
