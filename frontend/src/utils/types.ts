// src/utils/types.ts

export interface User {
    id: number;
    email: string;
    role: string;
  }
  
  export interface TrainingPlan {
    id: number;
    name: string;
    isActive: boolean;
    sessions: number;
  }
  
  export interface TrainingSession {
    id: number;
    date: string;
    exercises: Exercise[];
  }
  
  export interface Exercise {
    id: number;
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }
  
  export interface ProgressData {
    date: string;
    weight: number;
  }
  