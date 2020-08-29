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
    width: 100%;
    margin-bottom: 20px;
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
    display: flex;
    flex-direction: column;

    font-size: 16px;
    list-style: none;
    box-sizing: border-box;
    padding: 12px 20px;
    word-break: break-word;
    margin: 0;
    border-radius: 6px;
    overflow: hidden;
    background-color: rgb(44, 135, 232);
    color: #fff;

    width: 100%;
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

  .news {
    display: inline-block;
    overflow: hidden;
    flex: 0 0 80px;
    width: 80px;
    height: 60px;
    box-sizing: border-box;
    font-size: 12px;
    padding: 7px 10px 0 0;
    text-align: center;
    border-right: 1px solid #eaeaea;
    margin-right: 10px;
  }

  .news > em {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display: block;
    line-height: 40px;
  }

  .news-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 7px;
  }

  .news-title {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
  }

  .news-desc {
    font-size: 12px;
    font-weight: 200;
    height: 100%;
  }

  .calendarAndNews {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    box-sizing: border-box;
    word-break: break-word;
    background-color: rgb(44, 135, 232);
    color: rgb(255, 255, 255);
    width: 100%;
    list-style: none;
    margin: 0px;
    border-radius: 6px;
    overflow: hidden;
  }

  .score-box,
  .table-box {
    padding: 0 10px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(230, 234, 238, 0.2);
  }

  .score-box > .item,
  .table-box > .item {
    font-weight: 500;
    font-size: 14px;
    width: 70px;
    display: inline-block;
  }

  .score-box > .score,
  .table-box > .score {
    font-weight: 300;
    font-size: 14px;
    padding-left: 5px;
  }

  .table-header {
    padding: 10px;
    border-top: 1px solid rgba(230, 234, 238, 0.2);
    margin-top: 10px;
    font-size: 16px;
  }
`;
