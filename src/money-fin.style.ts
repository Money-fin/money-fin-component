import { css } from 'lit-element';

export default css`
  :host {
    display: inline-block;
    position: fixed;
    z-index: 10000;
    bottom: 30px;
    right: 30px;
  }

  .fab-checkbox:not(:checked) ~ .chat-wrap {
    bottom: 45px;
    right: 45px;
  }

  .chat-wrap {
    box-sizing: border-box;
    position: fixed;
    right: 20px;
    bottom: 100px;
    height: 80vh;
    width: 400px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.35);

    display: grid;
    grid-template-rows: 50px auto 60px;
    background-color: #fff;
  }

  .chat-header {
    display: flex;
    align-items: center;
    background: rgb(18, 110, 226);
    padding: 0 20px;
    font-weight: normal;
    transition: background-color 200ms ease;
    cursor: pointer;
  }

  .chat-header:hover {
    background-color: rgb(44, 135, 232);
  }

  .chat-header > h1 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    user-select: none;
  }

  .chat-header > .icon-close {
    color: #fff;
    position: absolute;
    right: 20px;
  }

  .chat-body {
    padding: 40px 20px 20px;
    overflow-y: scroll;
  }

  .chat-footer {
    border-top: 1px solid #e6eaee;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .chat-input {
    width: 80%;
    border: none;
    height: 100%;
    font-size: 16px;
    padding: 0 20px;
    font-weight: normal;
    outline: none;
  }

  .chat-submit {
    border: none;
    background-color: transparent;
    height: 100%;
    width: 20%;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    transition: color 200ms ease;
  }

  .chat-submit:hover {
    color: #333a;
  }

  .clickable {
    cursor: pointer;
  }
`;
