import { LitElement, html, css } from "lit";

export class viewicon extends LitElement {
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
          d="M22.1082 11.4125L13.2782 2.5825C12.9082 2.2125 12.3982 2.0025 11.8682 2.0025H4.69824C3.59824 2.0025 2.69824 2.9025 2.69824 4.0025V11.1725C2.69824 11.7025 2.90824 12.2125 3.28824 12.5825L12.1182 21.4125C12.8982 22.1925 14.1682 22.1925 14.9482 21.4125L22.1182 14.2425C22.8982 13.4625 22.8982 12.2025 22.1082 11.4125ZM13.5282 20.0025L4.69824 11.1725V4.0025H11.8682L20.6982 12.8325L13.5282 20.0025Z"
          fill="${this.color}"
        />
        <path
          d="M7.19824 8.0025C8.02667 8.0025 8.69824 7.33093 8.69824 6.5025C8.69824 5.67408 8.02667 5.0025 7.19824 5.0025C6.36982 5.0025 5.69824 5.67408 5.69824 6.5025C5.69824 7.33093 6.36982 8.0025 7.19824 8.0025Z"
          fill="${this.color}"
        />
      </svg>
    `;
  }

  static get styles() {
    return css`
      .show.active {
        animation: pulse 0.7s 1;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    `;
  }
}



customElements.define("view-icon", viewicon);
