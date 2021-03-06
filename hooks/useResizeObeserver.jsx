import React, {useEffect, useState, useRef} from 'react'
import ResizeObserver from 'resize-observer-polyfill';
 

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null)

  useEffect(() => {
  const observeTarget = ref.current
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      setDimensions(entry.contentRect)
    });
    console.log(entries)
  })
  resizeObserver.observe(observeTarget)
  return () => {
    resizeObserever.unobserve(observeTarget)
  }
  }, [ref])
  return dimensions;

}

export default useResizeObserver