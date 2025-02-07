import React from 'react';
import { BookOpen, X, ArrowLeft } from 'lucide-react';
import { Course, Topic, Lesson } from '../types';

interface SidebarProps {
  courses: Course[];
  currentCourse: Course;
  currentTopic: Topic | null;
  currentLesson: Lesson | null;
  onLessonSelect: (lesson: Lesson, topic: Topic) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ courses, currentCourse, currentTopic, currentLesson, onLessonSelect, isOpen, onClose }: SidebarProps) {
  return (
    <div className={`
      fixed inset-y-0 left-0 z-40
      w-64 bg-gray-900 text-white
      transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:static
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-xl font-bold">Querigma do Jucão</h1>
        </div>
        <button onClick={onClose} className="lg:hidden text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        {currentCourse.topics.map((topic) => (
          <div key={topic.id} className="mb-4">
            <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
            {topic.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`mb-2 p-2 rounded-lg cursor-pointer transition-colors flex gap-2 items-center ${
                  currentLesson?.id === lesson.id ? 'bg-blue-600' : 'hover:bg-gray-800'
                }`}
                onClick={() => onLessonSelect(lesson, topic)}
              >
                <img src={'1.jpg'} alt={lesson.title} className="w-16 h-10 object-cover rounded" />
                <div>
                  <p className="font-medium text-sm">{lesson.title}</p>
                  <p className="text-xs text-gray-400">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </nav>
      <button
  onClick={onClose}
  className="lg:hidden absolute bottom-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition flex items-center justify-center"
>
  <ArrowLeft cassa-me="w-8 h-8" />
</button>

    </div>
  );
}
