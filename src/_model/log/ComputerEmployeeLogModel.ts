import { ComputerModel } from "../computer/ComputerModel";
import { EmployeeModel } from "../employee/EmployeeModel";
import { EmployeeOperationTypeModel } from "../employee/EmployeeOperationTypeModel";

export interface ComputerEmployeeLogModel {
    id: number,
    computer: ComputerModel,
    employee: EmployeeModel,
    operation: EmployeeOperationTypeModel,
    message: string,
    date: Date
}