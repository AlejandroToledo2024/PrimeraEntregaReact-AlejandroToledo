
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input className="input" name="text" type="text" />
        <label className="label" htmlFor="input">Enter Your Name</label>
        <div className="topline" />
        <div className="underline" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-container {
    position: relative;
  }

  .input {
    padding: 10px;
    height: 40px;
    border: 2px solid #0B2447;
    border-top: none;
    border-bottom: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 7px 7px 0px 0px #0B2447;
    transition: all 0.5s;
  }

  .input:focus {
    box-shadow: none;
    transition: all 0.5s;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #0B2447;
    transition: all 0.5s;
    transform: scale(0);
    z-index: -1;
  }

  .input-container .topline {
    position: absolute;
    content: "";
    background-color: #0B2447;
    width: 0%;
    height: 2px;
    right: 0;
    top: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .topline {
    width: 35%;
    transition: all 0.5s;
  }

  .input-container .underline {
    position: absolute;
    content: "";
    background-color: #0B2447;
    width: 0%;
    height: 2px;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .underline {
    width: 100%;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .label {
    top: -10px;
    transform: scale(1);
    transition: all 0.5s;
  }`;

export default Input;
