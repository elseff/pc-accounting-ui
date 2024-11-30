/**
 * Ответ на удаление устройства из компьютера
 */
export interface RemoveDeviceResponse {
    device: string,
    computer: string,
    message: string
}