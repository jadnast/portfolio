"use client"

import { useState, useRef } from 'react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="hidden fixed left-0 bottom-8 px-8 lg:block" style={{zIndex: 999}}>
      <div className="relative duration-100">
        <div title="Some techno rave..." 
        className={`duration-300 bg-kononenko h-14 shadow-md flex rounded-md relative border-kononenko`} 
        style={{ height: 70, backgroundColor: isPlaying ? '#1c1c1c' : '' }}>
          <div className="icon ml-2 mr-4 playingicon">
            <span className="bg-opacity-80 bg-black" />
            <span className="bg-opacity-80 bg-black" />
            <span className="bg-opacity-80 bg-black" />
          </div>
          <audio
            ref={audioRef}
            src="/audio.webm"
            onEnded={handleAudioEnd}
          />
          <div className="flex block">
            <div className="text-left w-40 pr-8 flex flex-col justify-center">
              <h3 className="font-bold uppercase text-md truncate">Music</h3>
              <h4 className="uppercase font-mono text-2xs opacity-40 truncate">Some techno rave...</h4>
            </div>
            <div className="w-full grid items-center rounded-md w-36 mr-2">
              <button
                onClick={togglePlay}
                className="h-10 w-10 rounded-full flex items-center justify-center transform hover:scale-110 active:scale-95"
              >
                {isPlaying ? (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7h3v10H8zm5 0h3v10h-3z" />
                  </svg>
                ) : (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6v12l10-6z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}