import styled from "styled-components";

const PublishButton = () => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">Publish</div>
        <div className="letters">
          <span>P</span>
          <span>U</span>
          <span>B</span>
          <span>L</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #1A8917; /* Medium green */
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 20px;
    border-radius: 1000px;
    border: none;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    transition: background-color 0.3s;
    margin-left: 10px
  }

  .btn-53:hover {
    background-color: #161801
  }

  .btn-53:active {
    background-color: #0f5c0e;
  }

  .btn-53 .original {
    background: #1A8917;
    color: white;
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.05s;
  }
  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.1s;
  }
  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.15s;
  }
  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.2s;
  }
  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.25s;
  }
  .btn-53:hover span:nth-child(7) {
    transition-delay: 0.3s;
  }
`;

export default PublishButton;