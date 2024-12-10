/**
 * Запрос на удаление устройства из компьютера
 */
export interface RemoveDeviceRequest {
    deviceId: number,
    computerId: number   
}