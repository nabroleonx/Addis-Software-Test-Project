import React, { useState } from "react";
import {
  Field,
  Fields,
  Fill,
  Form,
  Input,
  Item,
  Preview,
  PreviewField,
  PreviewLabel,
  PreviewValue,
  Radio,
  RadioButtons,
  Root,
  ModalBlock,
  ModalBody,
  ModalButton,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./AddUser.style";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/usersSlice";

const AddUserModal = ({ title, active, hideModal }) => {
  const dispatch = useDispatch();
  const initialData = {
    firstname: "",
    lastname: "",
    age: 0,
    gender: "M",
    height: 0,
  };

  const [inputData, setinputData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
  };

  const { firstname, lastname, age, gender, height } = inputData;

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(createUser(inputData));
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
              <Form onSubmit={handleAddUser}>
                <Fields>
                  <Field>
                    <Input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </Field>
                  <Field>
                    <Input
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </Field>
                  <Field>
                    <Input
                      type="number"
                      name="age"
                      onChange={handleChange}
                      placeholder="Age"
                      required
                    />
                  </Field>
                  <RadioButtons>
                    <Item>
                      <Root>
                        <label>
                          Male
                          <Radio
                            type="radio"
                            onChange={handleChange}
                            name="gender"
                            value="M"
                            checked={gender === "M"}
                            aria-checked={gender === "M"}
                          />
                          <Fill />
                        </label>
                      </Root>
                    </Item>

                    <Item>
                      <Root>
                        <label>
                          Female
                          <Radio
                            type="radio"
                            onChange={handleChange}
                            name="gender"
                            value="F"
                            checked={gender === "F"}
                            aria-checked={gender === "F"}
                          />
                          <Fill />
                        </label>
                      </Root>
                    </Item>
                  </RadioButtons>
                  <Field>
                    <Input
                      type="number"
                      name="height"
                      placeholder="Height in cm"
                      onChange={handleChange}
                      required
                    />
                  </Field>
                </Fields>
                <Preview>
                  <PreviewField>
                    <PreviewLabel>Firstname:</PreviewLabel>
                    <PreviewValue>{firstname ? firstname : ""}</PreviewValue>
                  </PreviewField>
                  <PreviewField>
                    <PreviewLabel>Lastname:</PreviewLabel>
                    <PreviewValue>{lastname ? lastname : ""}</PreviewValue>
                  </PreviewField>
                  <PreviewField>
                    <PreviewLabel>Age:</PreviewLabel>
                    <PreviewValue>{age ? age : ""}</PreviewValue>
                  </PreviewField>
                  <PreviewField>
                    <PreviewLabel>Gender:</PreviewLabel>
                    <PreviewValue>
                      {(gender === "M" && "Male") ||
                        (gender === "F" && "Female")}
                    </PreviewValue>
                  </PreviewField>
                  <PreviewField>
                    <PreviewLabel>Height:</PreviewLabel>
                    <PreviewValue>{height ? height : ""} cm</PreviewValue>
                  </PreviewField>
                </Preview>
                <ModalButton type="submit">Add User</ModalButton>
              </Form>
            </ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};

export default AddUserModal;
