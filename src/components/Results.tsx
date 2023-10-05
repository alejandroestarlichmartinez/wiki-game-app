'use client'
// react and next
import React, { useEffect, useMemo, useRef, useState } from 'react'
// interfaces
import { IGame } from '@/interfaces'
import { Card } from '@/components'
import { useWindowDimensions } from '@/hooks'

type Props = {
  results: Array<IGame>
}

export function Results({ results }: Props) {
  const ref: any = useRef();
  const { height, width } = useWindowDimensions();
  const [columnsNumber, setColumnsNumber] = useState(0);
  let rootIndex = 0;

  const getNumberOfGridColumns = () => {
    const gridElement = ref.current;
    if (gridElement) {
      const computedStyle = getComputedStyle(gridElement);
      const gridTemplateColumns = computedStyle.gridTemplateColumns;
      const numberOfColumns = gridTemplateColumns.split(' ').length;
      return numberOfColumns;
    }
    return 0;
  };

  useEffect(() => {
    const numberOfGridColumns = getNumberOfGridColumns();
    setColumnsNumber(numberOfGridColumns);
  }, [height, width]);

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
     {Array.from({ length: columnsNumber }).map((_, index) => {
        rootIndex >= columnsNumber ? rootIndex = 0 : rootIndex = index;
        return (
          <div key={index}>
            {results.map((result, index) => {
              if (index % columnsNumber === rootIndex) {
                return <Card
                  key={result.game_id}
                  id={result.game_id}
                  name={result.title}
                  description={result.description}
                  image={result.sample_cover?.thumbnail_image}
                  releaseDate={result.platforms[0].first_release_date}
                  genres={result.genres}
                  votes={result.num_votes}
                />
              }
            })}
          </div>
        )
      })}
    </div>
  )
}
