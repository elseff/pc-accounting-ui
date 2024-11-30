/**
 * Запрос на создание нового устройства
 */
export interface AddDeviceRequest {
    title: string,
    price: number,
    type: string
}