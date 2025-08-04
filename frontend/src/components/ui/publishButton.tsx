
import styled from 'styled-components';

const PublishButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <p>New Blog +</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0.4em 1.5em;
    border: #02b875 solid 0.15em;
    border-radius: 999px;
    color: #02b875;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
  }

  .button p {
    z-index: 1;
  }

  .button:hover {
    color: #212121;
  }

  .button:active {
    border-color: #027d54;
  }

  .button::after,
  .button::before {
    content: "";
    position: absolute;
    width: 6em;
    aspect-ratio: 1;
    background: #02b875;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-6em);
  }

  .button::after {
    right: 0;
    transform: translateX(6em);
  }

  .button:hover:before {
    transform: translateX(-0.5em);
  }

  .button:hover:after {
    transform: translateX(0.5em);
  }

  .button:active:before,
  .button:active:after {
    background: #027d54;
  }
`;

export default PublishButton;