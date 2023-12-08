import { LitElement, html, css } from "lit";
import "./assets/icons/sellIcon";
import "./assets/icons/financeIcon";
import "./assets/icons/shopIcon";
import "./assets/icons/chatIcon";
import "./assets/icons/moreIcon";
import "./assets/icons/moreIcon";
import "./assets/icons/attachMoneyIcon";
import "./assets/icons/viewicon";

export class MyElement extends LitElement {
  static get properties() {
    return {
      active: { type: String },
      currenData: { type: Array },
      drawerOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.active = "";
    this.currenData = [];
    this.drawerOpen = false;
  }

  selectOption(option) {
    if (option === this.active) {
      this.drawerOpen = false;
      this.active = "";
    } else {
      this.active = option;
      this.currenData = data[option].options;
      this.drawerOpen = true;
    }
  }

  boldText(text) {
    const primeraPalabra = text.split(" ")[0];
    const restoDelTexto = text.slice(primeraPalabra.length);
    return html`<b>${primeraPalabra}</b>${restoDelTexto}`;
  }

  handleDrawerOptionClick() {
    this.drawerOpen = false;
    this.active = "";
  }

  renderIcon(iconName) {
    switch (iconName) {
      case "sellIcon":
        return html`<sell-icon color="#ffffff"></sell-icon>`;
      case "attachMoneyIcon":
        return html`<attach-icon color="#ffffff"></attach-icon>`;
      case "viewicon":
        return html` <view-icon color="#ffffff"></view-icon>`;
      case "financeIcon":
        return html` <finance-icon color="#ffffff"></finance-icon>`;
      default:
        return "";
    }
  }

  connectedCallback() {
    document.addEventListener("mousedown", this.handleClickOutside.bind(this));
    super.connectedCallback();
  }

  disconnectedCallback() {
    document.removeEventListener(
      "mousedown",
      this.handleClickOutside.bind(this)
    );
    super.disconnectedCallback();
  }

  handleClickOutside(event) {
    if (this.drawerOpen) {
      const path = event.composedPath();
      const drawer = this.shadowRoot.querySelector(".drawer");
      const bottomContent = this.shadowRoot.querySelector(".bottom_content");

      const clickedInsideDrawer = drawer && path.includes(drawer);
      const clickedInsideBottomContent =
        bottomContent && path.includes(bottomContent);

      if (!clickedInsideDrawer && !clickedInsideBottomContent) {
        this.drawerOpen = false;
        this.active = "";
      }
    }
  }
  render() {
    return html`
      <div class="containerV1">
        ${this.drawerOpen ? html`<div class="blur-background"></div>` : ""}
        <div class=${`drawer ${this.drawerOpen ? "expanded" : "collapsed"}`}>
          ${this.currenData.map(
            (option) => html`
              <div class="drawer-option" @click=${this.handleDrawerOptionClick}>
                <div class="drawer-option-circle">
                  ${this.renderIcon(option.icon)}
                </div>
                <span class="drawer-option-text">
                  ${this.boldText(option.text)}
                </span>
              </div>
            `
          )}
        </div>
        <div class="bottom_content">
          <div
            class=${`nav-item ${this.active === "Sell/Trade" ? "active" : ""}`}
            @click=${() => this.selectOption("Sell/Trade")}
          >
            <view-icon
              color="${this.active === "Sell/Trade" ? "#005AB8" : "black"}"
            ></view-icon>
            <span>Sell/Trade</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Finance" ? "active" : ""}`}
            @click=${() => this.selectOption("Finance")}
          >
            <finance-icon
              color="${this.active === "Finance" ? "#005AB8" : "black"}"
            ></finance-icon>
            <span>Finance</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Shop" ? "active" : ""}`}
            @click=${() => this.selectOption("Shop")}
          >
            <shop-icon
              color="${this.active === "Shop" ? "#005AB8" : "black"}"
            ></shop-icon>
            <span>Shop</span>
          </div>
          <div
            class=${`nav-item ${this.active === "Chat" ? "active" : ""}`}
            @click=${() => this.selectOption("Chat")}
          >
            <chat-icon
              color="${this.active === "Chat" ? "#005AB8" : "black"}"
            ></chat-icon>
            <span>Chat</span>
          </div>
          <div
            class=${`nav-item ${this.active === "More" ? "active" : ""}`}
            @click=${() => this.selectOption("More")}
          >
            <more-icon
              color="${this.active === "More" ? "#005AB8" : "black"}"
            ></more-icon>
            <span>More</span>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .blur-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.6);
      }

      .containerV1 {
        font-family: sans-serif;
        font-weight: 400;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0 8px 8px 8px;
        right: 0;
        box-sizing: border-box;

        .bottom_content {
          font-family: sans-serif;
          font-weight: 400;
          background-color: #ffffff;
          box-sizing: border-box;
          color: #2A343D;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          height: 70px;
          overflow: hidden;
          border-radius: 5px;
          box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
        }

        .nav-item {
          font-family: sans-serif;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          position: relative;
          background: white;
          width: 20%;
          font-size: 12px;
          gap: 6px;

          &:first-child {
            padding-left: 8px;
          }

          &:last-child {
            padding-right: 8px;
          }
        }

        .drawer-option-circle {
          background-color: #005AB8;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
        }

        .active {
          color: #005ab8;
        }

        .active:after {
          background: linear-gradient(
            to right,
            transparent 15%,
            #005ab8 15%,
            #005ab8 85%,
            transparent 85%
          );

          position: absolute;
          content: "";
          height: 4px;
          right: 0;
          left: 0;
          top: 0;
        }

        .drawer {
          background-color: #ffffff;
          box-sizing: border-box;
          color: #2A343D;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          border-radius: 5px;
          box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
          margin-bottom: 8px;
          overflow: hidden;
          box-sizing: border-box;
          display: none;
          transition: all 0.3s ease-in-out;
          max-height: 0;

          .drawer-option {
            height: 70px;
            display: flex;
            flex-direction: row;
            gap: 16px;
            align-items: center;
            padding: 0 16px;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
          }
        }

        .drawer.expanded {
          display: block;
          animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          max-height: 100%;
        }

        .drawer.collapsed {
          display: block;
          animation: slide-out-top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;}
        }

        @keyframes slide-in-bottom {
          0% {
            transform: translateY(25px); 
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-out-top {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
      
          100% {
            transform: translateY(25px);
            opacity: 0;
          }
        }
      }
    `;
  }
}

window.customElements.define("my-element", MyElement);
