import { prisma } from "~/lib/prisma"
export default defineEventHandler(async (event) => {

    const counter = await prisma.counter.findFirst({
        where: {
            id:1
        }
    })

    return counter;

})