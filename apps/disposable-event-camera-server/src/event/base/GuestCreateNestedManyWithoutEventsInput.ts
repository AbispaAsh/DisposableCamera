/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GuestWhereUniqueInput } from "../../guest/base/GuestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GuestCreateNestedManyWithoutEventsInput {
  @Field(() => [GuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GuestWhereUniqueInput],
  })
  connect?: Array<GuestWhereUniqueInput>;
}

export { GuestCreateNestedManyWithoutEventsInput as GuestCreateNestedManyWithoutEventsInput };
