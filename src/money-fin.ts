import { LitElement, html, css, property, TemplateResult } from 'lit-element';

import { dragElement } from './utils/draggable';

export class MoneyFin extends LitElement {
  @property({ type: String }) page = 'main';

  protected firstUpdated(): void {
    this.init();
  }

  init(): void {
    dragElement(this);
  }
}

customElements.define('money-fin', MoneyFin);
