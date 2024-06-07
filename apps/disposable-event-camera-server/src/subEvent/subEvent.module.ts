import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubEventModuleBase } from "./base/subEvent.module.base";
import { SubEventService } from "./subEvent.service";
import { SubEventController } from "./subEvent.controller";
import { SubEventResolver } from "./subEvent.resolver";

@Module({
  imports: [SubEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubEventController],
  providers: [SubEventService, SubEventResolver],
  exports: [SubEventService],
})
export class SubEventModule {}
