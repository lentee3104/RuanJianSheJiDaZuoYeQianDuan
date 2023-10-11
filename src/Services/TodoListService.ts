import {reactive, watch} from 'vue'
import type {ITaskItem} from '@/Types/ITaskItem'
import type {ITodoListService} from '@/Types/ITodoListService'

export class TodoListService implements ITodoListService{

    #list: ITaskItem[]=[];

    constructor(){
        this.#list = reactive(this.loadFromLocalStorage())

        watch(this.#list, ()=>{
            this.saveToLocalStorage();
            console.log("list 被修改");
        })
    }

    addNewTask(taskContent: string): boolean {
        const newTask = {content: taskContent, isDone: false};
        this.#list.push(newTask);
        return true;
    }

    deleteTask(taskIndex: number): boolean {
        this.#list.splice(taskIndex,1);
        return true;
    }

    getList(): ITaskItem[] {
        return this.#list;
    }

    loadFromLocalStorage(): ITaskItem[] {
        let strInStorage = localStorage.getItem('list')??'[]'
        return JSON.parse(strInStorage);
    }

    saveToLocalStorage(): boolean {
        localStorage.setItem("list", JSON.stringify(this.#list))
        return true;
    }

}
