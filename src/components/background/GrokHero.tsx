import React from 'react';
// import Image from 'next/image';

import TextHoverEffectDemo from './TextHoverEffectDemo';


const GrokHeroWithHover = () => {
  return (
    <div className="relative w-full h-screen">

<TextHoverEffectDemo/>



      <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
        {/* Background gradient effect - MODIFIED: changed to darker blue gradients */}
        <div className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]" 
             style={{ 
               maskImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))', 
               opacity: 1 
             }}>
          <div className="flex flex-col w-full h-full blur">
            <div className="grow" 
                 style={{ background: 'conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(65, 134, 217) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)' }}>
            </div>
            <div className="grow" 
                 style={{ background: 'conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(65, 134, 217) 324deg, rgb(255, 255, 255) 342deg)' }}>
            </div>
          </div>
          <canvas className="absolute inset-0 h-full w-full" width="1210" height="1109"></canvas>
        </div>

        {/* Main content section */}
        <div className="relative w-full flex grow items-center justify-start z-20">
          <div className="space-y-16">
            <div>
              <div className="absolute inset-0 top-20 flex justify-center items-center grow">
                <div>
                  {/* Grok logo/outline */}
                  

                  {/* Search input form */}
                  {/* <div className="flex justify-center relative z-10 w-full mt-12" style={{ opacity: 1 }}>
                    <div className="w-full max-w-xl">
                      <form className="relative w-full items-center gap-3 bg-gradient-to-tr rounded-full p-px from-primary/5 to-primary/20">
                        <input 
                          type="text" 
                          className="w-full h-14 lg:h-[68px] rounded-full border-none pl-6 pr-20 focus:outline-none focus:ring-2 focus:ring-white/50 bg-background text-primary placeholder:text-primary/50" 
                          placeholder="Ask Grok anything..." 
                          name="query" 
                        />
                        <div className="absolute inset-y-2 right-2 lg:right-4 flex items-center">
                          <button 
                            aria-label="Submit a query to Grok" 
                            type="submit" 
                            className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 aspect-square px-3.5 py-1.5 sm:text-sm [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:sm:size-3 gap-x-2 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] hover:border-[--btn-hover] rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-text:theme(colors.background)] [--btn-hover:theme(colors.primary/80%)] opacity-50"
                          >
                            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="!size-4">
                              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer section with CTA buttons and hover effect text */}
        {/* <div className="relative flex items-end justify-between gap-6 py-10 z-100 lg:min-h-[160px]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6 my-2">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
            <div className="max-w-lg">
              <div className="hidden sm:block">
               We are thrilled to unveil Grok 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.
                 
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link 
                className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)] hidden lg:flex" 
                href="/api"
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                Build with Grok
              </Link>
              <Link 
                className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]" 
                href="/news/grok-3"
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                Learn more
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GrokHeroWithHover;