import { css } from 'lit-element';

export default css`
  :host {
    display: block;
    min-height: 65px;
  }

  .wrap {
    list-style: none;
    box-sizing: border-box;
    display: inline-flex;
    align-items: flex-start;
  }

  .wrap.me {
    align-items: flex-start;
    float: right;
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

  .chat-message__arrow--right {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #f0f0f0;
  }

  .chat-message {
    font-size: 16px;
    list-style: none;
    font-weight: 300;
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

  .chat-message.me {
    background-color: #fff;
    border: 1px solid #f0f0f0;
    color: #000;

    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 0;
    text-align: right;
    display: inline-flex;
    align-self: flex-end;
  }
`;
