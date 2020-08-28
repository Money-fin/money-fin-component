import { css } from 'lit-element';

export default css`
  :host {
    display: block;
  }

  .wrap {
    list-style: none;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: inline-flex;
    align-items: flex-start;
  }

  .profile {
    list-style: none;
    box-sizing: border-box;
    margin-right: 8px;
  }

  .chat-message__arrow {
    list-style: none;
    box-sizing: border-box;
    width: 0;
    height: 0;
    margin-top: 18px;
  }

  .chat-message__arrow--left {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid rgb(44, 135, 232);
  }

  .chat-message {
    font-size: 16px;
    list-style: none;
    box-sizing: border-box;
    display: inline-block;
    padding: 12px 20px;
    word-break: break-word;
    margin: 0;
    border-radius: 6px;
    overflow: hidden;
    background-color: rgb(44, 135, 232);
    color: #fff;
    margin-right: 30px;
  }
`;
