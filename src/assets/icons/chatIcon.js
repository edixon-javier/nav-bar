import { LitElement, html, css } from "lit";

export class chatIcon extends LitElement {
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
        width="21"
        height="21"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9004 0H2.90039C1.80039 0 0.900391 0.9 0.900391 2V20L4.90039 16H18.9004C20.0004 16 20.9004 15.1 20.9004 14V2C20.9004 0.9 20.0004 0 18.9004 0ZM18.9004 14H4.90039L2.90039 16V2H18.9004V14Z"
          fill="${this.color}"
        />
      </svg>
    `;
  }

  static get styles() {
    return css`
      .show.active {
        animation: float 0.7s ease-in-out 1;
      }

      @keyframes float {
        0% {
          transform: translateY(0);
        }
    
        25% {
          transform: translateY(-2px) rotate(10deg);
        }
    
        50% {
          transform: translateY(-4px) rotate(-10deg);
        }
    
        100% {
          transform: translateY(0) rotate(0deg);
        }
      }
    `;
  }
}

customElements.define("chat-icon", chatIcon);
