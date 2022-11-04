import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 1rem 3rem;
`;

export const Items = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  padding: 2px 10px;
  border: 1px solid #b6bab9;
  border-radius: 6px;
  background: #e4eeff;
  width: 400px;
  &:hover {
    color: #024173;
    border: 1px solid #024173;
  }
`;

export const Header = styled.div`
  display: flex;
  background: #c1c1c1;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const ActionButton = styled.button`
  border: 1px;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #b6becc;
    color: #024173;
  }
`;

export const EditButton = styled(ActionButton)`
  background: #ff9a36;
  color: #fff;
  &:hover {
    border: 1px solid #ff9a36;
  }
`;

export const DeleteButton = styled(ActionButton)`
  background: #a60303;
  color: #fff;
  &:hover {
    border: 1px solid #a60303;
  }
`;
