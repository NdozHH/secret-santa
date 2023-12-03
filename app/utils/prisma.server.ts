import { type Prisma, PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient<Prisma.PrismaClientOptions, "query">;
}

declare const global: CustomNodeJsGlobal;

let prisma: PrismaClient<Prisma.PrismaClientOptions, "query">;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: [
        { level: "query", emit: "event" },
        { level: "error", emit: "stdout" },
        { level: "info", emit: "stdout" },
        { level: "warn", emit: "stdout" },
      ],
      errorFormat: "pretty",
    });
    console.log("Development: Created DB connection.");
  }
  prisma = global.prisma;
  prisma.$connect();
}

export * from "@prisma/client";
export default prisma;
