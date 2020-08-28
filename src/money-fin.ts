import { LitElement, html, TemplateResult } from 'lit-element';
import style from './money-fin.style';
import { dragElement } from './utils/draggable';

export class MoneyFin extends LitElement {
  static styles = style;

  render(): TemplateResult {
    return html` <div>TEST</div> `;
  }

  protected firstUpdated(): void {
    this.init();
  }

  init(): void {
    dragElement(this);
  }
}

customElements.define('money-fin', MoneyFin);
