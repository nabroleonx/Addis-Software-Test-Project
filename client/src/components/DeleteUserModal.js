import React from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./AddUser.style";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/usersSlice";
import { DeleteButton } from "./App.style";

const DeleteUserModal = ({ title, active, hideModal, user }) => {
  const dispatch = useDispatch();
  const { _id } = user ?? !null;

  const handleDeleteUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser({ id: _id }));
  };

  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  style={{ fill: "#91949a" }}
                >
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
                </svg>
              </ModalClose>
            </ModalHeader>
            <ModalBody>
              <p>Do you really want to delete this user?</p>
              <DeleteButton onClick={handleDeleteUser}>
                Delete user
              </DeleteButton>
            </ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};

export default DeleteUserModal;
