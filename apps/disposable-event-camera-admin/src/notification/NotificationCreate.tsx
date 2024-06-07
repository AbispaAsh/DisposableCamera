import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { GuestTitle } from "../guest/GuestTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceInput source="guest.id" reference="Guest" label="Guest">
          <SelectInput optionText={GuestTitle} />
        </ReferenceInput>
        <TextInput label="message" multiline source="message" />
        <BooleanInput label="read" source="read" />
      </SimpleForm>
    </Create>
  );
};
