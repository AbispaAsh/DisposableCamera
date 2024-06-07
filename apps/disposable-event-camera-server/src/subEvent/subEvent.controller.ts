import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubEventService } from "./subEvent.service";
import { SubEventControllerBase } from "./base/subEvent.controller.base";

@swagger.ApiTags("subEvents")
@common.Controller("subEvents")
export class SubEventController extends SubEventControllerBase {
  constructor(
    protected readonly service: SubEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
