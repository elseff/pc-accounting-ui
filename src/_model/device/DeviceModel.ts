import { TypeModel } from "./TypeModel";

/**
 * Устройство
 */
export interface DeviceModel {
    id: number,
    title: string,
    type: TypeModel,
    price: number,
    number: string,
    computerId: number
}