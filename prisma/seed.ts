import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const tickets = [
    {
        id: "1",
        title: "Ticket 1",
        content: "This is the first ticket from the database",
        status: "DONE" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 499,
    },

    {
        id: "2",
        title: "Ticket 2",
        content: "This is the second ticket from the database",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 399,
    },

    {
        id: "3",
        title: "Ticket 3",
        content: "This is the thrid ticket from the database",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 599,
    }
];

const seed = async () => {
    const t0 = performance.now();
    console.log("DB Seed: Started ...");
  
    await prisma.ticket.deleteMany();
  
    await prisma.ticket.createMany({
      data: tickets,
    });
  
    const t1 = performance.now();
    console.log(`DB Seed: Finished (${t1 - t0}ms)`);
  };
  
  seed();