import { LitElement, html, css, property, TemplateResult } from 'lit-element';

export class MoneyFin extends LitElement {
  @property({ type: String }) page = 'main';

  static styles = css``;

  render(): TemplateResult {
    return html` <main>Test</main> `;
  }
}

customElements.define('money-fin', MoneyFin);
