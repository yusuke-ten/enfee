import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Label, Button, Heading, CameraIcon } from 'components/atoms';
import { Field, TextAreaField, SelectField } from 'components/molecules';
import { ImageCroppingModal } from 'components/organisms';
import { StoreItem } from 'services/models';
import { SETTINGS_PROFILE } from 'src/const/Sentence';
import useInputFile from 'src/hooks/use-inputFile';

export interface EditProfileProps {
  modalProps: {
    isOpen: boolean;
    handleClose: () => void;
    handleOpen: () => void;
    undoAvatarProps: () => void;
  };
  avatarProps: {
    value: string;
    file: File | null;
  };
  nameProps: {
    name: string;
    value: string;
    onChangeHandler: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
  };
  storeProps: {
    items: StoreItem[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  profileProps: {
    name: string;
    value: string;
    handleChage: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
  };
  handleSetAvatar: (imageUrl: string, file: File) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
  modalProps: { isOpen, handleClose, handleOpen, undoAvatarProps },
  avatarProps,
  nameProps,
  storeProps,
  profileProps,
  handleSetAvatar,
  handleSubmit,
}) => {
  const { fileRef, onChangeFile, image } = useInputFile();

  const handleChangeFileWrapper = () => {
    onChangeFile();
    handleOpen();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ImageCroppingModal
        open={isOpen}
        onClose={handleClose}
        image={image}
        handleSetAvatar={handleSetAvatar}
        undoAvatarProps={undoAvatarProps}
      />
      <StyledHeading type="h3" color="base" align="center">
        {SETTINGS_PROFILE.title}
      </StyledHeading>
      <Section>
        <Label>{SETTINGS_PROFILE.avatar.label}</Label>
        <AvatarWrapper>
          <input
            id="file"
            ref={fileRef}
            type="file"
            style={{ display: 'hidden' }}
            accept="image/png,image/jpg,image/jpeg"
            hidden
            onChange={handleChangeFileWrapper}
          />
          <Overlay as="label" htmlFor="file" />
          <StyledCameraIcon width={16} height={16} color="gray" />
          <AvatarCircle src={avatarProps.value} />
        </AvatarWrapper>
      </Section>
      <Section>
        <Field
          name={nameProps.name}
          type="text"
          placeholder={SETTINGS_PROFILE.profile.placeholder}
          label={SETTINGS_PROFILE.name.label}
          {...nameProps}
        />
      </Section>
      <Section>
        <SelectField
          title={SETTINGS_PROFILE.store.title}
          label={SETTINGS_PROFILE.store.label}
          name="store"
          {...storeProps}
        />
      </Section>
      <Section>
        <TextAreaField
          name={profileProps.name}
          placeholder={SETTINGS_PROFILE.profile.placeholder}
          valueMaxLength={160}
          label={SETTINGS_PROFILE.profile.label}
          {...profileProps}
        />
      </Section>
      <ButtonField>
        <Button type="submit">{SETTINGS_PROFILE.save}</Button>
      </ButtonField>
    </Form>
  );
};

const Form = styled.form`
  padding: 20px 50px;
  background-color: white;
  box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.5);
`;
const StyledHeading = styled(Heading)`
  padding: 12px 0;
  margin-bottom: 14px;
`;
const AvatarWrapper = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
`;
const Overlay = styled.label`
  cursor: pointer;
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: gray;
  opacity: 0.5;
  z-index: 1;

  &:hover {
    background-color: #fff;
    opacity: 0.2;
    transition: background-color 0.2s;
  }
`;
const StyledCameraIcon = styled(CameraIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Section = styled.div`
  margin-bottom: 16px;
`;
const ButtonField = styled.div`
  text-align: center;
  padding: 12px 0;
`;

export default EditProfile;
