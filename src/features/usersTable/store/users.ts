import {create} from 'zustand'
import TUser from "../types.ts";
import {persist} from "zustand/middleware";

type UsersState = {
    users: TUser[];
    fetchUsers: () => void;
    addFavorite: (id: number) => void;
    favorites: number[]
}

const useUsersStore = create<UsersState>()(persist(
    (set, get) => ({
        users: [],
        favorites: [],
        fetchUsers: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json() as TUser[]
            set({users: data})
        },
        addFavorite: (id: number) => {
            set(() => ({
                favorites: [...get().favorites, id]
            }))
        }
    }),
    {
        name: 'users',
        partialize: (state) => ({
            favorites: state.favorites
        })
    }
))

export default useUsersStore;