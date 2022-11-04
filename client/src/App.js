import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, searchUser } from "./redux/usersSlice";
import "./App.css";
import { Input, ModalButton } from "./components/AddUser.style";
import AddUserModal from "./components/AddUserModal";
import {
  ActionButtons,
  Container,
  DeleteButton,
  EditButton,
  Header,
  Items,
  Wrapper,
} from "./components/App.style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditUserModal from "./components/EditUserModal";
import DeleteUserModal from "./components/DeleteUserModal";

function App() {
  const users = useSelector((state) => state.users.searchedUsers);
  const isLoading = useSelector((state) => state.users.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setAddUserModalOpen(false);
      setEditUserModalOpen(false);
      setDeleteUserModalOpen(false);
    }
  }, [isLoading]);

  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <>
      <ToastContainer />
      <Header>
        <Input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            dispatch(searchUser(e.target.value));
          }}
        />
        <ModalButton onClick={() => setAddUserModalOpen(true)}>
          Add user
        </ModalButton>
      </Header>
      <Container>
        <AddUserModal
          active={addUserModalOpen}
          hideModal={() => setAddUserModalOpen(false)}
          title="Add new user"
          footer={<ModalButton>Add user</ModalButton>}
        />
        <EditUserModal
          active={editUserModalOpen}
          hideModal={() => setEditUserModalOpen(false)}
          title="Edit user"
          user={selectedUser}
        />
        <DeleteUserModal
          active={deleteUserModalOpen}
          hideModal={() => setDeleteUserModalOpen(false)}
          title="Delete user"
          user={selectedUser}
        />

        <Wrapper>
          {users.map((user, idx) => (
            <Items key={idx}>
              <h3 style={{ fontFamily: "monospace", fontWeight: "lighter" }}>
                {user.firstname + " " + user.lastname}
              </h3>
              <p style={{ fontFamily: "monospace", fontWeight: "lighter" }}>
                {user.age} years old
              </p>
              <p style={{ fontFamily: "monospace", fontWeight: "lighter" }}>
                {(user.gender === "M" && "Male") ||
                  (user.gender === "F" && "Female")}
              </p>
              <p style={{ fontFamily: "monospace", fontWeight: "lighter" }}>
                {user.height} cm
              </p>
              <ActionButtons>
                <EditButton
                  onClick={(e) => {
                    setSelectedUser(user);
                    setEditUserModalOpen(true);
                  }}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  onClick={(e) => {
                    setSelectedUser(user);
                    setDeleteUserModalOpen(true);
                  }}
                >
                  Delete
                </DeleteButton>
              </ActionButtons>
            </Items>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
