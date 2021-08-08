import { writable } from "svelte/store"

export const user = writable({
    uid: undefined,
    email: undefined
})

export let newCategory = writable();