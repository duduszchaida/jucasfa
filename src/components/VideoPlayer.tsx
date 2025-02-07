import React from 'react';
import { Menu, Download, ArrowLeft, ArrowRight } from 'lucide-react';
import { Lesson } from '../types';


interface VideoPlayerProps {
  lesson: Lesson;
  onNextLesson?: () => void;
  onPreviousLesson?: () => void;
  onToggleSidebar?: () => void; // Nova prop
}

export function VideoPlayer({ lesson, onNextLesson, onPreviousLesson, onToggleSidebar }: VideoPlayerProps) {
  return (
    <div className="flex-1 mt-8 lg:mt-6 p-4 lg:p-6 pt-16 lg:pt-6">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={lesson.videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-xl lg:text-2xl font-bold">{lesson.title}</h1>
          <p className="lg:hidden text-gray-600">{lesson.description}</p>
          <div className="flex flex-row justify-between gap-2 mt-6">
            {/* Botão de abrir a sidebar */}
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="w-full sm:w-auto flex items-center justify-center gap-2 lg:hidden p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Menu className="w-5 h-5" />
                Lista de aulas
              </button>
            )}
            {/* Botão de download do PDF */}
            <a
              href={lesson.pdfUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
        
        <p className="hidden lg:block mt-2 text-gray-600">{lesson.description}</p>

        <div className="flex flex-row justify-between gap-2 mt-6">
          <button
            onClick={onPreviousLesson}
            className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2"
            disabled={!onPreviousLesson}
          >
            <ArrowLeft className="w-4 h-4" />
            Aula anterior
          </button>

          <button
            onClick={onNextLesson}
            className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2"
            disabled={!onNextLesson}
          >
            Próxima aula
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
