import type {IAddressItem} from "@/Types/IAddressItem";

export interface IAddressService{
    getAddress():IAddressItem[];
    addNewAddress(name:string, sex:string, number:string, address:string): boolean;
    deleteAddress(addressIndex: number): boolean;
    loadFromLocalStorage(): IAddressItem[];
    saveToLocalStorage(): boolean;
}