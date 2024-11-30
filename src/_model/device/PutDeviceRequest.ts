/**
 * Запрос на добавление устройства в компьютер
 */
export interface PutDeviceRequest {
    computerId: number,
    deviceId: number
}