import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { GuestTitle } from "../guest/GuestTitle";

export const PhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="caption" multiline source="caption" />
        <TextInput label="filename" source="filename" />
        <ReferenceInput source="guest.id" reference="Guest" label="Guest">
          <SelectInput optionText={GuestTitle} />
        </ReferenceInput>
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
