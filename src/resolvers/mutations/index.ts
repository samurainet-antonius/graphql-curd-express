import { mutationField, nullable, nonNull } from "nexus"
import { User } from ".."
import { CreateUserInput, UpdateUserInput, UserWhereUniqueInput } from "../inputs"

export const createUser = mutationField("createUser", {
    type: nullable(User),
    args: {
        input: nonNull(CreateUserInput)
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.create({
            data: {
                ...args.input,
                email: args.input.email.toLocaleLowerCase(),
            }
        })
    }
})

export const updateUser = mutationField("updateUser", {
    type: nullable(User),
    args: {
        input: nonNull(UpdateUserInput),
        where: nonNull(UserWhereUniqueInput)
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.update({
            where: {
                id: args.where.id
            },
            data: {
                ...args.input,
                email: args.input.email.toLocaleLowerCase()
            }
        })
    }
})

export const removeUser = mutationField("removeUser", {
    type: nullable(User),
    args: {
        where: nonNull(UserWhereUniqueInput)
    },
    resolve: async (root, args, ctx) => {
        return ctx.prisma.user.delete({
            where: {
                id: args.where.id
            }
        })
    }
})