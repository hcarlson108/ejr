'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
    <div className='flex flex-col items-center w-full min-h-0 px-4 gap-4'>
      <a
        href='/Resume1.pdf'
        download='Emma_Radtke_Resume.pdf'
        className='rounded-2xl px-4 py-2 bg-pink-400 text-white hover:bg-pink-500 cursor-pointer'
      >
        Download Resume
      </a>
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
