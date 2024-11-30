/**
 * Запрос на добавление сотрудника
 */
export interface AddEmployeeRequest {
    firstName: string,
    lastName: string,
    patronymic: string,
    speciality: string
}