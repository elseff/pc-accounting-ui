import { DeviceModel } from "../device/DeviceModel";
import { EmployeeModel } from "../employee/EmployeeModel";

/**
 * Компьютер
 */
export interface ComputerModel {
    id: number,
    number: string,
    title: string,
    ready: boolean,
    cabinet: number,
    type: string,
    responsibleEmployee: EmployeeModel,
    devices: DeviceModel[]
}