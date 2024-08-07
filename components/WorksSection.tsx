"use client"
import React, { useEffect, useRef, useState } from 'react';
import works from '../lib/works.json';

const WorksSection: React.FC = () => {
  const [gap, setGap] = useState<string>('0');

  // Группируем работы по значению row
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
                <img src={`/works/${work.image}`} alt={`${work.title}`} />
                <div className="flex justify-between">
                    <p>{work.title}</p>
                    <p className='opacity-50'>{work.customer}</p>
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