import { apiConnection } from "./ApiResponse"

export const createPoll = ( data ) => {
    return apiConnection(
        'insertPoll',
        {},
        data,
        'POST'
    )
}