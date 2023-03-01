import { list, nonNull, nullable, queryField } from "nexus"
import { User } from ".."
import { UserWhereUniqueInput } from "../inputs"

export const users = queryField("users", {
    type: nonNull(list(nonNull(User))),
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findMany({})
    }
})

export const user = queryField("user", {
    type: nullable(User),
    args: {
        where: nonNull(UserWhereUniqueInput)
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.findUnique({
            where: {
                id: args.where.id
            }
        })
    }
})