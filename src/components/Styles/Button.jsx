import React, { useState } from "react";
import Styled from "styled-components";

class Button extends React.Component {
   state = {
      border: "",
      background: "",
      color: "",
      shadow: "",
      hoverBackground: "",
      hoverColor: "",
   };

   getStyle() {
      switch (this.props.type) {
         case "light-primary":
            this.setState({
               border: "none",
               background: "var(--text-dark--accent)",
               color: "var(--text-light)",
               shadow: "none",
               hoverBackground: "",
               hoverColor: "",
            });
            break;
         case "dark-primary":
            this.setState({
               border: "none",
               background: "#B550F8",
               color: "var(--text-light)",
               shadow: "none",
               hoverBackground: "",
               hoverColor: "",
            });
            break;
         case "secondary":
            this.setState({
               border: "none",
               background: "var(--text-light)",
               color: "var(--text-dark)",
               shadow: "0px 3px 9px rgba(57, 20, 0, 0.08)",
               hoverBackground: "",
               hoverColor: "",
            });
            break;
         case "outline":
            this.setState({
               border: "1px solid rgba(255, 255, 255, 0.295743)",
               background: "unset",
               color: "var(--text-light)",
               shadow: "none",
               hoverBackground: "",
               hoverColor: "",
            });
            break;
         default:
            break;
      }
   }

   componentDidMount() {
      this.getStyle();
   }

   render() {
      let padding = null;

      if (this.props.padding === "large") {
         padding = "15px 32px 12px 32px";
      } else if (this.props.padding === "small") {
         padding = "16px 18px 12px 18px";
      }

      const Button = Styled.button`
      font-family: Epilogue;
      font-size: 14px;
      font-weight: 900;
      line-height: 15px;
      padding: ${padding};
      border-radius: 6px;
      outline: none;
      transition: 0.3s all;
      text-transform: uppercase;
      cursor: pointer;
      border: ${this.state.border};
      color: ${this.state.color};
      background-color: ${this.state.background};
      box-shadow: ${this.state.shadow};

      &:hover {
         background-color: ${this.state.hoverBackground};
         color: ${this.state.hoverColor};
      }
      `;

      return <Button type="button">{this.props.text}</Button>;
   }
}

export default Button;
