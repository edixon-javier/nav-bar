import { LitElement, html, css } from "lit";

export class moreIcon extends LitElement {
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
          d="M6.30029 10C5.20029 10 4.30029 10.9 4.30029 12C4.30029 13.1 5.20029 14 6.30029 14C7.40029 14 8.30029 13.1 8.30029 12C8.30029 10.9 7.40029 10 6.30029 10ZM18.3003 10C17.2003 10 16.3003 10.9 16.3003 12C16.3003 13.1 17.2003 14 18.3003 14C19.4003 14 20.3003 13.1 20.3003 12C20.3003 10.9 19.4003 10 18.3003 10ZM12.3003 10C11.2003 10 10.3003 10.9 10.3003 12C10.3003 13.1 11.2003 14 12.3003 14C13.4003 14 14.3003 13.1 14.3003 12C14.3003 10.9 13.4003 10 12.3003 10Z"
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

customElements.define("more-icon", moreIcon);
