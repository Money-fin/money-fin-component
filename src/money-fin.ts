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
    this.initPosition();
  }

  initPosition(): void {
    if (!window.localStorage) {
      return;
    }

    this.style.top = localStorage.getItem(`money-fin-position-top`) || `0px`;
    this.style.left = localStorage.getItem(`money-fin-position-left`) || `0px`;
  }
}

customElements.define('money-fin', MoneyFin);
