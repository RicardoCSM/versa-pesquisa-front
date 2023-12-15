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
              <h1 className="text-5xl md:text-center font-extralight">
                Lorem ipsum dolar sit amed
              </h1>
              <p className="p-3 text-2xl md:text-center text-gray-700">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra
              </p>
              <div className="w-2/4 md:w-1/4 mt-8 md:mt-10">
                <Button onClick={registerModal.onOpen} label="Sign Up" />
              </div>
            </div>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-400 md:flex md:items-center md:justify-between md:p-6">
              <span className="text-sm text-[#1565C0] sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Versa Tecnologia</a>. All Rights Reserved.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#1565C0] sm:mt-0">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </Container>
    </>
  )
}
