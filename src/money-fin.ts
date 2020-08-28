import { LitElement, html, TemplateResult, eventOptions } from 'lit-element';
import { query, property } from 'lit-element/lib/decorators.js';
import style from './money-fin.style';
import fabStyle from './style/fab.style';
import { IconClose, IconSubmit } from './icons/icons';

export class MoneyFin extends LitElement {
  static styles = [fabStyle, style];

  @property({ type: String })
  inputText = ``;

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
              .value="${this.inputText}"
              @keydown=${this.enterInput}
            />
            <button class="chat-submit" @click=${this.cleanMessage}>
              ${IconSubmit}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  @eventOptions({ capture: true })
  enterInput(event: KeyboardEvent): void {
    const isEnter = event.keyCode === 13;
    const { currentTarget } = event;

    this.inputText = (currentTarget as HTMLInputElement).value;

    if (isEnter) {
      this.cleanMessage();
    }
  }

  close(): void {
    this.fabCheckBox.checked = !this.fabCheckBox.checked;
  }

  submit(): void {
    this.cleanMessage();
  }

  cleanMessage(): void {
    this.inputText = ``;
  }
}

customElements.define('money-fin', MoneyFin);
