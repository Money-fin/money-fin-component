import { LitElement, html, TemplateResult } from 'lit-element';
import style from './money-fin.style';
import fabStyle from './style/fab.style';
import { dragElement } from './utils/draggable';

export class MoneyFin extends LitElement {
  static styles = [fabStyle, style];

  render(): TemplateResult {
    return html`
      <div class="fab-wrapper">
        <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
        <label class="fab" for="fabCheckbox">
          <span class="fab-dots fab-dots-1"></span>
          <span class="fab-dots fab-dots-2"></span>
          <span class="fab-dots fab-dots-3"></span>
        </label>
        <div class="fab-wheel">Test</div>
      </div>
    `;
  }

  protected firstUpdated(): void {
    this.init();
  }

  init(): void {
    dragElement(this);
  }
}

customElements.define('money-fin', MoneyFin);
