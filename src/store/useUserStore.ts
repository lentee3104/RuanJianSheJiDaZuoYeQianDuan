import {defineStore} from "pinia";
import {ref} from "vue";

interface User {
    id: number,
    username: string,
    passward: string,
    role: {
        roleName: string ,
        roleType: number,
        rights: string[]
    }
}
export const useUserStore = defineStore("user",
    () => {
        const user:User = ref({}) /*全局可用，*/

        const changeUser = (value:any) => {
            user.value = value
        }

        return {
            user,
            changeUser
        }
    },
    {
        persist: true
    }
)