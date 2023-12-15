import ISurvey from "./ISurvey";
import ITheme from "./ITheme";

export default interface ISurveyDetails {
    'survey': ISurvey | null,
    'questions': [] | null,
    'pages': [] | null,
    'theme': ITheme | null,
    'settings': []
}