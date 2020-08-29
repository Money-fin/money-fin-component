import {
  LitElement,
  html,
  TemplateResult,
  eventOptions,
  property,
} from 'lit-element';
import { query } from 'lit-element/lib/decorators.js';
import style from './money-fin.style';
import fabStyle from './style/fab.style';
import { IconClose, IconSubmit } from './icons/icons';
import './components/chat-message';
import { ChatMessage } from './components/chat-message';

export class MoneyFin extends LitElement {
  static styles = [fabStyle, style];

  @property({ type: String })
  inputText = ``;

  @property({ type: Array })
  chatList: ChatMessage[] = [];

  @query(`#fabCheckbox`)
  fabCheckBox: any;

  @query(`.chat-body`)
  chatBody: any;

  render(): TemplateResult {
    return html`
      <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab clickable" for="fabCheckbox">
          <span class="fab-dots fab-dots-1"></span>
          <span class="fab-dots fab-dots-2"></span>
          <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel chat-wrap">
          <div class="chat-header" @click=${this.close}>
            <h1>Monery Fin Bot</h1>
            ${IconClose}
          </div>

          <div class="chat-body">
            <chat-message who="BOT" message="Hello"></chat-message>
            ${this.chatList.map(
              (message: ChatMessage) => html`
                <chat-message
                  who="${message.who || `BOT`}"
                  message="${message.message || ``}"
                ></chat-message>
              `
            )}
          </div>

          <div class="chat-footer">
            <input
              class="chat-input"
              type="text"
              placeholder="Write a message..."
              .value="${this.inputText}"
              @keydown=${this.enterInput}
            />
            <button class="chat-submit" @click=${this.submit}>
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
      this.submit();
    }
  }

  close(): void {
    this.fabCheckBox.checked = !this.fabCheckBox.checked;
  }

  submit(): void {
    this.chat(`ME`, this.inputText);
    this.cleanMessage();
  }

  async chat(who: `BOT` | `ME`, message: string): Promise<void> {
    const isBlankText = !message.trim().length;

    if (isBlankText) {
      return;
    }

    this.chatList.push({
      who,
      message,
    } as ChatMessage);
    await this.updateComplete;
    this.scrollDown();
  }

  scrollDown(): void {
    (this.chatBody as HTMLElement).scrollTop = (this
      .chatBody as HTMLElement).scrollHeight;
  }

  cleanMessage(): void {
    this.inputText = ``;
  }
}

customElements.define('money-fin', MoneyFin);
