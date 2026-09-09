'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='flex justify-center w-full min-h-0 px-4'>
      <div ref={containerRef} className='w-full max-w-3xl'>
        <Document
          file='/Resume1.pdf'
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className='flex flex-col items-center gap-4'
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={containerWidth}
              className='shadow-md rounded-lg overflow-hidden'
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
