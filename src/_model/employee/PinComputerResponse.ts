/**
 * Ответ за закрепление\открепление компьютера
 */
export interface PinComputerResponse {
    computerId: number,
    computerTitle: string,
    employeeId: number,
    employeName: string,
    message: string
}