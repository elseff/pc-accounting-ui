import { ComputerModel } from "../computer/ComputerModel";
import { DeviceModel } from "../device/DeviceModel";
import { DeviceOperatiionTypeModel } from "../device/DeviceOperationTypeModel";

export interface ComputerDeviceLogModel {
    id: number,
    computer: ComputerModel,
    device: DeviceModel,
    operation: DeviceOperatiionTypeModel,
    message: string,
    date: Date
}