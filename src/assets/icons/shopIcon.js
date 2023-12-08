import { LitElement, html, css } from "lit";

export class shopIcon extends LitElement {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 8.97764C5.5 6.25996 7.78805 4 10.6818 4C13.5756 4 15.8636 6.25996 15.8636 8.97764C15.8636 11.6953 13.5756 13.9553 10.6818 13.9553C7.78805 13.9553 5.5 11.6953 5.5 8.97764ZM10.6818 2C6.74733 2 3.5 5.0926 3.5 8.97764C3.5 12.8627 6.74733 15.9553 10.6818 15.9553C12.1394 15.9553 13.5026 15.5309 14.6414 14.799L21.0581 21.0037L22.4958 19.6134L16.1619 13.4887C17.2213 12.2766 17.8636 10.7055 17.8636 8.97764C17.8636 5.0926 14.6163 2 10.6818 2Z"
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

customElements.define("shop-icon", shopIcon);
