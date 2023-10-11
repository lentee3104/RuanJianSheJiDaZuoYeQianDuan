import type {ITaskItem} from '@/Types/ITaskItem'

export interface ITodoListService {
    getList(): ITaskItem[];

    addNewTask(taskContent: string): boolean;

    deleteTask(taskIndex: number): boolean;

    loadFromLocalStorage(): ITaskItem[];

    saveToLocalStorage(): boolean;
}
