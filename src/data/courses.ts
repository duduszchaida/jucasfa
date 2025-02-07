import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Querigma',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    topics: [
      {
        id: '1-1',
        title: 'Querigma - 2024',
        description: 'Encontros ministrados pelo Elian',
        lessons: [
          {
            id: '1-1-1',
            title: '1 - As Sagradas Escrituras',
            description: 'Sagradas escrituras',
            videoUrl: 'https://www.youtube.com/embed/rQhy1ziljcU',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
          {
            id: '1-1-2',
            title: '2 - Simbolismo',
            description: 'Simbolismo',
            videoUrl: 'https://www.youtube.com/embed/TfdnhMqnlXM',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
          {
            id: '1-1-3',
            title: '2.2 - Simbolismo dos números',
            description: 'Simbolismo dos números',
            videoUrl: 'https://www.youtube.com/embed/SGgvzye6kkA',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
        
          {
            id: '1-1-4',
            title: '3 - Iconografia',
            description: 'Simbolismo dos números',
            videoUrl: 'https://www.youtube.com/embed/SRycTwhVuQU',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
          {
            id: '1-1-5',
            title: '3.2 - Iconografia',
            description: 'Simbolismo dos números',
            videoUrl: 'https://www.youtube.com/embed/qaPpjYKfANw',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
          {
            id: '1-1-6',
            title: '4 - Criação',
            description: 'Simbolismo dos números',
            videoUrl: 'https://www.youtube.com/embed/xf5D9VJaYcc',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
          {
            id: '1-1-7',
            title: '4.2 - Sobre a obra dos seis dias',
            description: 'Simbolismo dos números',
            videoUrl: 'https://www.youtube.com/embed/s7dY3dyTtnQ',
            pdfUrl: '/pdfs/intro-to-html.pdf'
          },
        
        ]
      },
      // Add more topics here
    ]
  }
];