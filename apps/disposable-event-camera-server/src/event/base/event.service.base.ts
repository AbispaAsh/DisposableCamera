/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Event as PrismaEvent,
  Guest as PrismaGuest,
  Notification as PrismaNotification,
  SubEvent as PrismaSubEvent,
  User as PrismaUser,
} from "@prisma/client";

export class EventServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EventCountArgs, "select">): Promise<number> {
    return this.prisma.event.count(args);
  }

  async events<T extends Prisma.EventFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventFindManyArgs>
  ): Promise<PrismaEvent[]> {
    return this.prisma.event.findMany<Prisma.EventFindManyArgs>(args);
  }
  async event<T extends Prisma.EventFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventFindUniqueArgs>
  ): Promise<PrismaEvent | null> {
    return this.prisma.event.findUnique(args);
  }
  async createEvent<T extends Prisma.EventCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventCreateArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.create<T>(args);
  }
  async updateEvent<T extends Prisma.EventUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventUpdateArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.update<T>(args);
  }
  async deleteEvent<T extends Prisma.EventDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventDeleteArgs>
  ): Promise<PrismaEvent> {
    return this.prisma.event.delete(args);
  }

  async findGuests(
    parentId: string,
    args: Prisma.GuestFindManyArgs
  ): Promise<PrismaGuest[]> {
    return this.prisma.event
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .guests(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.event
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }

  async findSubEvents(
    parentId: string,
    args: Prisma.SubEventFindManyArgs
  ): Promise<PrismaSubEvent[]> {
    return this.prisma.event
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subEvents(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.event
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
