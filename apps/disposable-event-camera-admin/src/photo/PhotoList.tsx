import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GUEST_TITLE_FIELD } from "../guest/GuestTitle";

export const PhotoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Photos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="caption" source="caption" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="filename" source="filename" />
        <ReferenceField label="Guest" source="guest.id" reference="Guest">
          <TextField source={GUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <TextField label="url" source="url" />
      </Datagrid>
    </List>
  );
};
