'use client'

import Container from "../components/Container";
import Navbar from "../components/navbar/Navbar";
import Image from 'next/image';

const About = () => {
  return (
    <div>
        <Navbar />
        <Container>
          <div className="flex flex-col md:flex-row w-full p-3">
            <div className="flex flex-col items-center w-full md:w-3/5">
              <div className="text-3xl font-bold text-[#1565C0]">ABOUT US</div>
              <div className="p-3 text-gray-700 text-justify">
                <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat dui, consequat eget tellus ac, ornare suscipit ipsum. Suspendisse arcu nulla, faucibus nec elit sed, tincidunt venenatis lectus. Fusce et ligula purus. Duis pretium condimentum ultricies. Sed vitae sapien non sapien convallis posuere. Donec faucibus lorem id cursus dapibus. Morbi augue dolor, accumsan sit amet massa quis, elementum porta quam. Mauris ac neque ut dolor malesuada luctus ornare vel nunc. Etiam leo tellus, sodales in egestas sit amet, luctus non lorem. Nullam eu risus a mauris pulvinar volutpat. Curabitur sodales, arcu sit amet sodales malesuada, quam massa eleifend velit, eu tempus ipsum ligula eget nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eget augue condimentum, tincidunt magna sed, interdum mauris. Donec congue velit sed purus cursus, a dignissim quam sollicitudin. Vivamus imperdiet, ante vitae aliquet vulputate, tellus libero auctor massa, eget ultrices dui ex ut lectus. Pellentesque et hendrerit leo.              </p>
                <p>
                Ut non nisl ullamcorper, dictum justo in, interdum dolor. Sed efficitur tristique magna, sit amet pretium nisl blandit non. Vestibulum elementum erat et ipsum laoreet gravida. Nulla dignissim elit eget dignissim elementum. Proin sollicitudin lobortis felis, vel dignissim eros ultricies at. Ut hendrerit dignissim nunc, et molestie massa consectetur ullamcorper. Etiam leo felis, consectetur sed nisi eget, fermentum vulputate tellus. Aenean nec sagittis augue, vitae tempus nunc. In sollicitudin, erat et mattis mollis, est orci laoreet dolor, nec convallis risus ligula at ipsum. Proin euismod lectus eu nisi iaculis, vitae finibus turpis elementum. Maecenas orci risus, sodales sit amet consectetur non, pharetra et dolor.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <img src="/images/about.png"/>
            </div>
          </div>
        </Container>
    </div>
  );
};

export default About;