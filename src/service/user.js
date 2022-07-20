import { apiConnection } from "./ApiResponse"

export const createUser = ( data ) => {
    return apiConnection(
        'insertUser',
        {},
        data,
        'POST'
    )
}