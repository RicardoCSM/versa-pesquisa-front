export default interface ISurveySetting {
    id?: number,
    create_test?: number,
    collect_email_addresses?: number,
    send_participants_copy_of_responses?: number
    make_questions_mandatory_by_default?: number,
    limit_to_1_answer?: number,
    show_link_to_send_another_answer?: number
}