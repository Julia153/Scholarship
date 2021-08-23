//letting the varibles be writable
import { writable } from "svelte/store"

//creating the varible user
export const user = writable({
    uid: undefined,
    email: undefined
})