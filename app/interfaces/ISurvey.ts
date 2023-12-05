export default interface ISurvey {
    id: number,
    title: string,
    description?: string,
    category: string,
    type: string,
    status: number,
    created_at: string,
    updated_at: string
}