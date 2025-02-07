export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  pdfUrl: string;
}