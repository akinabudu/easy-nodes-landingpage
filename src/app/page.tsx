import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';
// import HeroImage from "@/assets/node-tree.png";
import { FaTelegram } from 'react-icons/fa';
import Logo from "@/assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden font-sans">
      <BackgroundBeams />
      <div className="relative z-10">
        <header className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="easynodes" width={32} height={32} />
            <span className="font-bold text-xl font-serif">EasyNodes</span>
          </div>
          <Link href="https://t.me/easy_nodes_bot" target="_blank">
            <Button variant="default" className="hover:bg-[#0052FF] bg-[#627EEA] font-bold text-lg py-6 px-6 text-white transition-all duration-300 transform hover:scale-105 font-mono">
              Get Started
            </Button>
          </Link>
        </header>

        <main className="container mx-auto w-full px-4 py-12 min-h-[70vh] flex flex-col lg:flex-row justify-start items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up font-serif">Get your <span className="text-[#627EEA]">Base Nodes</span> now!</h1>
            <ul className="space-y-4 mb-8">
              {[
                "Start a RPC Node in 10 seconds via a Telegram bot!",
                "Pay with crypto",
                "No credit card required",
                "Most affordable"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg animate-fade-in-left font-sans" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-3 h-3 bg-[#627EEA] rounded-full mr-3"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="https://t.me/easy_nodes_bot" target="_blank">
              <Button variant="default" className="px-8 py-4 lg:px-16 lg:py-10 font-bold text-xl lg:text-2xl bg-[#627EEA] hover:bg-[#0052FF] text-white transition-all duration-300 transform hover:scale-105 font-mono">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* <Image
              src={HeroImage}
              alt="Node Instance"
              width={600}
              height={600}
              className="max-w-full h-auto"
            /> */}
          </div>
        </main>

        <footer className="px-4 py-8 bottom-0 w-full bg-opacity-50">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
            <p className='text-xl lg:text-2xl font-sans'>Join our Community:</p>
            <div className="flex items-center">
              <FaTelegram className="text-[#627EEA] text-3xl mr-2" />
              <Link href="https://t.me/easy_nodesc" target="_blank" className="text-xl lg:text-2xl font-bold text-[#627EEA] hover:text-[#0052FF] transition-colors duration-300 font-serif">
                Telegram
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-[#627EEA] font-mono">
            Powered by: orglobal
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;