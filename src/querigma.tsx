import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { VideoPlayer } from './components/VideoPlayer';
import { courses } from './data/courses';
import { Topic, Lesson } from './types';

function Querigma() {
  const [currentCourse] = useState(courses[0]);
  const [currentTopic, setCurrentTopic] = useState<Topic>(currentCourse.topics[0]);
  const [currentLesson, setCurrentLesson] = useState<Lesson>(currentTopic.lessons[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLessonSelect = (lesson: Lesson, topic: Topic) => {
    setCurrentTopic(topic);
    setCurrentLesson(lesson);
    setIsSidebarOpen(false);
  };

  const handleNextLesson = () => {
    const lessonIndex = currentTopic.lessons.findIndex(l => l.id === currentLesson.id);
    if (lessonIndex < currentTopic.lessons.length - 1) {
      setCurrentLesson(currentTopic.lessons[lessonIndex + 1]);
    } else {
      const topicIndex = currentCourse.topics.findIndex(t => t.id === currentTopic.id);
      if (topicIndex < currentCourse.topics.length - 1) {
        setCurrentTopic(currentCourse.topics[topicIndex + 1]);
        setCurrentLesson(currentCourse.topics[topicIndex + 1].lessons[0]);
      }
    }
  };

  const handlePreviousLesson = () => {
    const lessonIndex = currentTopic.lessons.findIndex(l => l.id === currentLesson.id);
    if (lessonIndex > 0) {
      setCurrentLesson(currentTopic.lessons[lessonIndex - 1]);
    } else {
      const topicIndex = currentCourse.topics.findIndex(t => t.id === currentTopic.id);
      if (topicIndex > 0) {
        setCurrentTopic(currentCourse.topics[topicIndex - 1]);
        setCurrentLesson(currentCourse.topics[topicIndex - 1].lessons[currentCourse.topics[topicIndex - 1].lessons.length - 1]);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        courses={courses}
        currentCourse={currentCourse}
        currentTopic={currentTopic}
        currentLesson={currentLesson}
        onLessonSelect={handleLessonSelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="lg:ml-32 lg:mr-32 flex-1 w-full">
        <VideoPlayer
          lesson={currentLesson}
          onNextLesson={handleNextLesson}
          onPreviousLesson={handlePreviousLesson}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </main>
    </div>
  );
}

export default Querigma;