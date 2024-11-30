/**
 * Ответ на добавление устройства в компьютер
 */
export interface PutDeviceResponse {
    deviceId: number,
    deviceTitle: string,
    computerId: number,
    computerTitle: string,
    message: string,
    date: Date
}