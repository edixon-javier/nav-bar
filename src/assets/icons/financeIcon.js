import { LitElement, html, css } from "lit";

export class financeIcon extends LitElement {
  static get properties() {
    return {
      color: { type: String },
    };
  }

  constructor() {
    super();
    this.color = "#000000";
  }
  render() {
    return html`
      <svg
        class=${this.color === "#005AB8" ? "show active" : ""}
        width="24"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4903 10.9C10.2203 10.31 9.49025 9.7 9.49025 8.75C9.49025 7.66 10.5003 6.9 12.1903 6.9C13.9703 6.9 14.6303 7.75 14.6903 9H16.9003C16.8303 7.28 15.7803 5.7 13.6903 5.19V3H10.6903V5.16C8.75025 5.58 7.19025 6.84 7.19025 8.77C7.19025 11.08 9.10025 12.23 11.8903 12.9C14.3903 13.5 14.8903 14.38 14.8903 15.31C14.8903 16 14.4003 17.1 12.1903 17.1C10.1303 17.1 9.32025 16.18 9.21025 15H7.01025C7.13025 17.19 8.77025 18.42 10.6903 18.83V21H13.6903V18.85C15.6403 18.48 17.1903 17.35 17.1903 15.3C17.1903 12.46 14.7603 11.49 12.4903 10.9Z"
          fill="${this.color}"
        />
      </svg>
    `;
  }

  static get styles() {
    return css`
      .show.active {
        animation: spin 0.7s 1;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
    
        100% {
          transform: rotate(180deg);
        }
      }    
    `;
  }
}

customElements.define("finance-icon", financeIcon);
