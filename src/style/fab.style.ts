import { css } from 'lit-element';

export default css`
  * {
    box-sizing: border-box;
  }

  .fab-checkbox {
    display: none;
  }
  .fab {
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    width: 4rem;
    height: 4rem;
    background: blue;
    border-radius: 50%;
    background: #126ee2;
    box-shadow: 0px 5px 20px #81a4f1;
    transition: all 0.3s ease;
    z-index: 1;
    border-bottom-right-radius: 6px;
    border: 1px solid #0c50a7;
  }

  .fab:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .fab-checkbox:checked ~ .fab:before {
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .fab:hover {
    background: #2c87e8;
    box-shadow: 0px 5px 20px 5px #81a4f1;
  }

  .fab-dots {
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    transform: translateX(0%) translateY(-50%) rotate(0deg);
    opacity: 1;
    animation: blink 3s ease infinite;
  }

  .fab-dots-1 {
    left: 15px;
    animation-delay: 0s;
  }
  .fab-dots-2 {
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation-delay: 0.4s;
  }
  .fab-dots-3 {
    right: 15px;
    animation-delay: 0.8s;
  }

  .fab-checkbox:checked ~ .fab .fab-dots {
    height: 6px;
  }

  .fab .fab-dots-2 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }

  .fab-checkbox:checked ~ .fab .fab-dots-1 {
    width: 32px;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }
  .fab-checkbox:checked ~ .fab .fab-dots-3 {
    width: 32px;
    border-radius: 10px;
    right: 50%;
    transform: translateX(50%) translateY(-50%) rotate(-45deg);
  }

  @keyframes blink {
    50% {
      opacity: 0.25;
    }
  }

  .fab-checkbox:checked ~ .fab .fab-dots {
    animation: none;
  }

  .fab-wheel {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 1px solid #;
    width: 10rem;
    height: 10rem;
    transition: all 0.3s ease;
    transform-origin: bottom right;
    transform: scale(0);
  }

  .fab-checkbox:checked ~ .fab-wheel {
    transform: scale(1);
  }
  .fab-action {
    position: absolute;
    background: #0f1941;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: White;
    box-shadow: 0 0.1rem 1rem rgba(24, 66, 154, 0.82);
    transition: all 1s ease;

    opacity: 0;
  }

  .fab-checkbox:checked ~ .fab-wheel .fab-action {
    opacity: 1;
  }

  .fab-action:hover {
    background-color: #f16100;
  }

  .fab-wheel .fab-action-1 {
    right: -1rem;
    top: 0;
  }

  .fab-wheel .fab-action-2 {
    right: 3.4rem;
    top: 0.5rem;
  }
  .fab-wheel .fab-action-3 {
    left: 0.5rem;
    bottom: 3.4rem;
  }
  .fab-wheel .fab-action-4 {
    left: 0;
    bottom: -1rem;
  }
`;
