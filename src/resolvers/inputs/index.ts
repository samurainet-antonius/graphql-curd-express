import { inputObjectType } from "nexus"

export const UserWhereUniqueInput = inputObjectType({
    name: "UserWhereUniqueInput",
    definition(t) {
        t.nonNull.id("id")
    },
})

export const CreateUserInput = inputObjectType({
    name: "CreateUserInput",
    definition(t) {
        t.nonNull.string("firstname");
		t.nonNull.string("lastname");
		t.nonNull.string("email");
    },
})

export const UpdateUserInput = inputObjectType({
    name: "UpdateUserInput",
    definition(t) {
        t.nonNull.string("firstname");
		t.nonNull.string("lastname");
		t.nonNull.string("email");
    },
})