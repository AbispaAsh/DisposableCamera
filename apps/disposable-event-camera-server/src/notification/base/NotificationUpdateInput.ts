/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { GuestWhereUniqueInput } from "../../guest/base/GuestWhereUniqueInput";

@InputType()
class NotificationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => GuestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GuestWhereUniqueInput)
  @IsOptional()
  @Field(() => GuestWhereUniqueInput, {
    nullable: true,
  })
  guest?: GuestWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  read?: boolean | null;
}

export { NotificationUpdateInput as NotificationUpdateInput };
