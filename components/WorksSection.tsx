"use client"
import React, { useEffect, useState } from 'react';
import works from '../lib/works.json';
import Image from 'next/image'

const WorksSection: React.FC = () => {
  const [gap, setGap] = useState<string>('0');
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const groupedWorks = works.reduce((acc, work) => {
    const row = work.row;
    if (!acc[row]) {
      acc[row] = [];
    }
    acc[row].push(work);
    return acc;
  }, {} as Record<string, typeof works>);

  useEffect(() => {
    const maxItemsInRow = Math.max(...Object.values(groupedWorks).map(worksInRow => worksInRow.length));
    let newGap = '0';

    if (maxItemsInRow === 2) {
      newGap = '0.5rem';
    } else if (maxItemsInRow >= 3) {
      newGap = '1rem';
    }

    setGap(newGap);
  }, [groupedWorks]);

  const handleImageLoad = (index: number) => {
    //console.log(`Image ${index} loaded`);
    setLoadedImages(prevState => ({ ...prevState, [index]: true }));
  };

  useEffect(() => {
    //console.log('Loaded images state updated:', loadedImages);
  }, [loadedImages]);

  return (
    <section id='works'>
      {Object.entries(groupedWorks).map(([row, worksInRow]) => (
        <div key={row} className="works-row">
          <div
            style={{ 
              width: '100%',
              display: 'grid',
              gridTemplateColumns: `repeat(${worksInRow.length}, 1fr)`,
              gap: gap
            }}
            className="works-container"
          >
            {worksInRow.map((work, index) => (
              <div key={index} className="bento">
                <div style={{ position: 'relative', width: '100%', height: '290px' }}>
                    {!loadedImages[index] && (
                      <div className='animate-pulse bg-kononenko border-kononenko' style={{ width: '100%', height: '100%', borderRadius: '10px', position: 'absolute', top: 0, left: 0}} />
                    )}
                    <Image
                      src={`/works/${work.image}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', visibility: loadedImages[index] ? 'visible' : 'hidden' }}
                      alt={`${work.title}`}
                      onLoad={() => handleImageLoad(index)}
                    />
                    {loadedImages[index] && (
                        <div className="flex justify-between">
                            <p>{work.title}</p>
                            <p className='opacity-50'>{work.customer}</p>
                        </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <style jsx>{`
        @media (max-width: 768px) {
          .works-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorksSection;