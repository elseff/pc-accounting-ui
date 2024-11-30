import { ComputerModel } from "../computer/ComputerModel";

/**
 * Сотрудник
 */
export interface EmployeeModel {
    id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    speciality: string,
    computer: ComputerModel
}