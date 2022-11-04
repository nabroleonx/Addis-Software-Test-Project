import styled from "styled-components";

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 25px;
  font-weight: 100;
  font-family: "Roboto", sans-serif;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const ModalButton = styled.button`
  background: #024173;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 10px 30px;
  border: 1px solid #b6bab9;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #b6bab9;
    color: #024173;
    border: 1px solid #024173;
  }
`;

export const Form = styled.form`
  grid: 1 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  divide: 1px solid red;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: 10px;
`;

export const PreviewField = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border: 0px solid #ccc;
  border-top-width: 1px;
  border-bottom-width: 0px;
  gap: 10px;
  padding: 20px;
`;

export const PreviewLabel = styled.label`
  font-weight: bold;
`;

export const PreviewValue = styled.span`
  font-weight: normal;
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  background: #e6f0ed;
  border: 1px solid #b6bab9;
  width: 100%;
  border-radius: 3px;
  ::placeholder {
    color: #b6bab9;
    font-size: 12px;
    font-weight: 50;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px blue;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 10px;
`;

export const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: ${(props) => (props.size ? props.size : 20)}px;
  height: ${(props) => (props.size ? props.size : 20)}px;
  position: relative;
  label {
    margin-left: 25px;
  }
  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid
      ${(props) => (props.borderColor ? props.borderColor : "#b6bab9")};
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#FAFAFA"};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

export const Fill = styled.div`
  background: ${(props) => (props.fillColor ? props.fillColor : "#b6bab9")};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid
      ${(props) => (props.borderActive ? props.borderActive : "#b6bab9")};
    border-radius: 100%;
  }
`;

export const Radio = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;
