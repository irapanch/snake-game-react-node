import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  ButtonStart,
  Container,
  Error,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './Modal.styled';
import { useForm } from 'react-hook-form';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 189, 31, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const InviteModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = data => {
    console.log(data);
    setModalIsOpen(false); // Закриваємо модальне вікно після натискання кнопки
  };

  return (
    <Container>
      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>
            <StyledInput
              type="text"
              name="name"
              title="Enter a name"
              autoComplete="name"
              placeholder="Enter your name..."
              {...register('name', {
                required: "Field can't be empty",
                minLength: {
                  value: 2,
                  message: 'Minimum 2 chars',
                },
              })}
            />
            {errors?.name && <Error>{errors?.name.message}</Error>}
          </StyledLabel>
          <ButtonStart type="submit">START</ButtonStart>
        </StyledForm>
      </Modal>
    </Container>
  );
};

export default InviteModal;
