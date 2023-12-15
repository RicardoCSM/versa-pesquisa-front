export default interface ISurvey {
    id: number,
    title?: string,
    description?: string,
    category?: string,
    type?: string,
    status?: number,
    created_at: number,
    updated_at: number
}