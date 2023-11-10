'use client';

import Container from './components/Container'
import Button from './components/buttons/Button'
import Navbar from './components/navbar/Navbar'
import useRegisterModal from './hooks/useRegisterModal';

export default function Home() {
  const registerModal = useRegisterModal();
  return (
    <>
    <Navbar />
    <Container>
      <div className="flex flex-col items-center">
        <div className="w-2/3 flex flex-col gap-20 justify-center mt-8 md:mt-20">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-5xl text-center font-extralight">
              Lorem ipsum dolar sit amed
            </h1>
            <p className="p-3 text-xl md:text-2xl text-center text-gray-700">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra
            </p>
            <div className="w-2/4 md:w-1/4 mt-8 md:mt-10">
              <Button onClick={registerModal.onOpen} label="Sign Up"/>
            </div>
          </div>
          <div className="h-[200px] bg-[#1565C0] rounded-3xl"></div>
        </div>
      </div>
    </Container>
    </>
  )
}
