import { ComputerModel } from "./computer/ComputerModel";
import { EmployeeModel } from "./employee/EmployeeModel";

export interface PassResponsibilityResponse {
    from: EmployeeModel,
    to: EmployeeModel,
    computer: ComputerModel,
    date: Date,
    message: string,
    documentNumber: string
}