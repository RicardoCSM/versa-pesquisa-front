'use client';

import Container from "../Container";
import Title from "../Title";
import { BsArrowReturnRight } from 'react-icons/bs';
import LogicBox from "../logic/LogicBox";
import LogicNew from "../logic/LogicNew";

const CreateLogic = () => {

    return (
        <div>
        <Title title="Survey Flow"/>
        <div className="mt-4">
            <Container>
                <div className="flex flex-col mx-auto gap-5">
                    <div className="flex">
                        <BsArrowReturnRight size={72} className="text-gray-500"/>
                        <LogicBox />
                    </div>
                    <div className="flex">
                        <BsArrowReturnRight size={72} className="text-gray-500"/>
                        <LogicBox />
                    </div>
                    <div className="flex">
                        <BsArrowReturnRight size={72} className="text-gray-500"/>
                        <LogicNew />
                    </div>
                </div>
            </Container>
        </div>
        </div>
    )
}

export default CreateLogic;