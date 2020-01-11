import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Label, Select, Button } from 'components/atoms';
import { Field, TextAreaField } from 'components/molecules';
import { StoreItem } from 'services/models';
import { SETTINGS_PROFILE } from 'src/const/Sentence';

interface EditProfileProps {
  avatarProps: {
    value: string;
  };
  nameProps: {
    value: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  storeProps: {
    items: StoreItem[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  profileProps: {
    value: string;
    handleChage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
    <form onSubmit={handleSubmit}>
      <Section>
        <Label>{SETTINGS_PROFILE.avatar.label}</Label>
        <AvatarWrapper>
          <AvatarCircle src={avatarProps.value} />
        </AvatarWrapper>
      </Section>
      <Section>
        <Field
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
          placeholder={SETTINGS_PROFILE.profile.placeholder}
          valueMaxLength={160}
          label={SETTINGS_PROFILE.profile.label}
          {...profileProps}
        />
      </Section>
      <ButtonField>
        <Button type="submit">{SETTINGS_PROFILE.save}</Button>
      </ButtonField>
    </form>
  );
};

const AvatarWrapper = styled.div`
  height: 60px;
  width: 60px;
`;
const Section = styled.div`
  margin-bottom: 10px;
`;
const ButtonField = styled.div`
  text-align: center;
  padding: 12px 0;
`;

export default EditProfile;
