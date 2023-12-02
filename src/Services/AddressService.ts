import {reactive, watch} from 'vue'
import type {IAddressService} from "@/Types/IAddressService";
import type {IAddressItem} from "@/Types/IAddressItem";

export class AddressService implements IAddressService{
    #list: IAddressItem[]=[];

    constructor() {
        this.#list = reactive(this.loadFromLocalStorage())

        watch(this.#list, ()=>{
            this.saveToLocalStorage();
            console.log("address被修改")
        })
    }

    addNewAddress(name: string, sex: string, number: string, address: string): boolean {
        const newAddress = {name:name, sex:sex, number:number, address:address};
        this.#list.push(newAddress)
        return true;
    }

    deleteAddress(addressIndex: number): boolean {
        this.#list.splice(addressIndex, 1);
        return true;
    }

    getAddress(): IAddressItem[] {
        return this.#list;
    }

    loadFromLocalStorage(): IAddressItem[] {
        let strInStorage = localStorage.getItem('list')??'[]'
        return JSON.parse(strInStorage);
    }

    saveToLocalStorage(): boolean {
        localStorage.setItem("list",JSON.stringify(this.#list))
        return true;
    }


}