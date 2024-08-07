import { Dispatch, SetStateAction } from 'react';

interface ConnectProps {
  setIsConnectOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Connect({ setIsConnectOpen }: ConnectProps) {
  const handleClose = () => {
    setIsConnectOpen(false);
  };

  return (
    <>
      <div data-state="open" className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" style={{ pointerEvents: 'auto' }} data-aria-hidden="true" aria-hidden="true"></div>

      <div role="dialog" data-state="open" className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-kononenko bg-kononenko p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[425px]" tabIndex={-1} style={{ pointerEvents: 'auto' }}>
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg font-semibold leading-none tracking-tight">
              Connect with me
            </h2>

            <div className='justify-between gap-2 flex lg:flex-row flex-col'>
                <a href="https://linkedin.com/in/jadnast" target="_blank" id="linkedin" className="w-full connect-btn text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-kononenko p-4">
                    <svg viewBox="0 0 138 139" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1998 0C4.56803 0 0 4.45695 0 9.94846V128.933C0 134.424 4.56803 138.878 10.1998 138.878H127.803C133.437 138.878 138.003 134.424 138.003 128.931V9.94846C138.003 4.45695 133.437 0 127.803 0H10.1998ZM74.2124 116.254H53.3703C53.372 115.885 53.6426 59.4094 53.3721 53.5455H74.2142V62.4232L74.1541 62.5161L74.0758 62.6379H74.2142V62.4232C76.9845 58.1508 81.9432 52.0738 93 52.0738C106.713 52.0738 116.995 61.0369 116.995 80.2982V116.254H96.1528V82.7097C96.1528 74.2785 93.1348 68.5283 85.5942 68.5283C79.835 68.5283 76.4053 72.4061 74.899 76.1527C74.349 77.4896 74.2124 79.3656 74.2124 81.238V116.254ZM41.8336 116.254V53.5437H20.9897V116.254H41.8336ZM43.2069 34.1495C43.2069 40.1674 38.6826 44.9832 31.4153 44.9832H31.2787C24.2827 44.9832 19.7602 40.1674 19.7602 34.1495C19.7602 27.995 24.4193 23.314 31.5537 23.314C38.6826 23.314 43.0703 27.995 43.2069 34.1495Z" fill="white"/></svg>
                    LinkedIn
                </a>

                <a href="malito:nikita@kononenko.org" target="_blank" id="email" className="w-full connect-btn text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-kononenko p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.608 12.172c0 .84.239 1.175.864 1.175c1.393 0 2.28-1.775 2.28-4.727c0-4.512-3.288-6.672-7.393-6.672c-4.223 0-8.064 2.832-8.064 8.184c0 5.112 3.36 7.896 8.52 7.896c1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744c-6.768 0-10.393-3.72-10.393-9.456c0-5.784 4.201-9.72 9.985-9.72c6.024 0 9.215 3.6 9.215 8.016c0 3.744-1.175 6.6-4.871 6.6c-1.681 0-2.784-.672-2.928-2.161c-.432 1.656-1.584 2.161-3.145 2.161c-2.088 0-3.84-1.609-3.84-4.848c0-3.264 1.537-5.28 4.297-5.28c1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872c-.888 0-1.871.719-1.871 2.832c0 1.68.744 2.616 1.871 2.616c.792 0 1.801-.504 1.801-1.896z"/></svg>
                    nikita@kononenko.org
                </a>

            </div>

            <div className='justify-between gap-2 flex lg:flex-row flex-col'>
                <a href="https://github.com/jadnast" target="_blank" id="github" className="w-full connect-btn text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-kononenko p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    GitHub
                </a>

                <a href="https://t.me/jadnast" target="_blank" id="telegram" className="w-full connect-btn text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-kononenko p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"/></svg>
                    Telegram
                </a>

            </div>

        </div>

        <button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>

      </div>
    </>
  );
}