import { prisma } from "../lib/prisma.js";

type CreateBadInput = {
    name: string;
}

export const findBadList = async () => {
    return prisma.bad.findMany({
        orderBy: {
            id: "asc",
        },
    });
}

export const createBad = async (input: CreateBadInput) => {
    return prisma.bad.create({
        data: {
            name: input.name,
        },
    });
}
