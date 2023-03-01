import { objectType } from "nexus"

// User
export const User = objectType({
    name: "User",
    definition(t) {
        t.id("id")
        t.string("firstname")
        t.string("lastname")
    }
})