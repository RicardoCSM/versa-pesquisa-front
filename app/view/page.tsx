'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import ISurveyDetails from '../interfaces/ISurveyDetails';
import surveysService from '../services/surveys.service';
import Survey from '../components/edit/survey/Survey';
import IResponse from '../interfaces/IResponse';
import responsesService from '../services/responses.service';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const View = () => {
  const searchParams = useSearchParams();
  const survey_id = searchParams?.get('survey_id');
  const [surveyDetails, setSurveyDetails] = useState<ISurveyDetails>({
    survey: null,
    questions: [],
    pages: [],
    theme: null,
    settings: [],
  });
  const [response, setResponse] = useState<IResponse>();
  const router = useRouter();
  useEffect(() => { 
    fetchSurvey() 
  }, []);

  useEffect(() => { 
    createResponse() 
  }, []);

  const fetchSurvey = async () => {
    try {
      if (survey_id) {
        const response = await surveysService.getDetails(Number.parseInt(survey_id));
        setSurveyDetails(response.data);
        if(response.data.survey.status == 0) {
          router.push('/');
          toast.error("Survey inactive");
        } 
      } else {
        console.log('None survey selected');
      }
    } catch (error) {
      console.log(error)
    }
  };

  const createResponse = async () => {
    try {
      if (survey_id) {
        const response = await responsesService.create({
          survey_id: Number.parseInt(survey_id)
        });        
        setResponse(response.data);
      } else {
        console.log('None survey selected');
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex w-full items-center justify-items-center min-h-screen">
      <Survey
        questions={surveyDetails.questions}
        title={surveyDetails.survey?.title}
        description={surveyDetails.survey?.description}
        category={surveyDetails.survey?.category}
        type={surveyDetails.survey?.type}
        settings={surveyDetails.settings}
        theme={surveyDetails.theme}
        response={response}
        pages={surveyDetails.pages}
        />
    </div>
  );
};

export default View;