import { LitElement, html, TemplateResult } from 'lit-element';
import { query } from 'lit-element/lib/decorators.js';
import style from './money-fin.style';
import fabStyle from './style/fab.style';
import { IconClose, IconSubmit } from './icons/icons';

export class MoneyFin extends LitElement {
  static styles = [fabStyle, style];

  @query(`#fabCheckbox`)
  fabCheckBox;

  render(): TemplateResult {
    return html`
      <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab" for="fabCheckbox">
          <span class="fab-dots fab-dots-1"></span>
          <span class="fab-dots fab-dots-2"></span>
          <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel chat-wrap">
          <div class="chat-header" @click=${this.close}>
            <h1>Monery Fin Bot</h1>
            ${IconClose}
          </div>

          <div class="chat-body"></div>

          <div class="chat-footer">
            <input
              class="chat-input"
              type="text"
              placeholder="Write a message..."
            />
            <button class="chat-submit">${IconSubmit}</button>
          </div>
        </div>
      </div>
    `;
  }

  close(): void {
    this.fabCheckBox.checked = !this.fabCheckBox.checked;
  }
}

customElements.define('money-fin', MoneyFin);
