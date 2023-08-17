// Extract a set of property values
export type ValueOf<T> = T[keyof T]
// <> type HTTPRequest = ValueOf<typeof REQUEST_METHOD> </> --- REQUEST_METHOD is an object ---
