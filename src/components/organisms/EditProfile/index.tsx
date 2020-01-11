import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Label, Select, Button, Heading } from 'components/atoms';
import { Field, TextAreaField } from 'components/molecules';
import { StoreItem } from 'services/models';
import { SETTINGS_PROFILE } from 'src/const/Sentence';

export interface EditProfileProps {
  avatarProps: {
    value: string;
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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
  avatarProps,
  nameProps,
  storeProps,
  profileProps,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <StyledHeading type="h3" color="base" align="center">
        {SETTINGS_PROFILE.title}
      </StyledHeading>
      <Section>
        <Label>{SETTINGS_PROFILE.avatar.label}</Label>
        <AvatarWrapper>
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
        <Label>{SETTINGS_PROFILE.store.label}</Label>
        <Select title={SETTINGS_PROFILE.store.label} name="hoge" {...storeProps} />
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
  height: 60px;
  width: 60px;
`;
const Section = styled.div`
  margin-bottom: 16px;
`;
const ButtonField = styled.div`
  text-align: center;
  padding: 12px 0;
`;

export default EditProfile;
