import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubEventServiceBase } from "./base/subEvent.service.base";

@Injectable()
export class SubEventService extends SubEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
