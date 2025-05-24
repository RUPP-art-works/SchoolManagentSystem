export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          role: 'admin' | 'teacher' | 'student'
          avatar_url: string | null
          phone: string | null
          address: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          role?: 'admin' | 'teacher' | 'student'
          avatar_url?: string | null
          phone?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: 'admin' | 'teacher' | 'student'
          avatar_url?: string | null
          phone?: string | null
          address?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      students: {
        Row: {
          id: string
          admission_number: string
          date_of_birth: string
          gender: string
          blood_group: string | null
          parent_name: string
          parent_email: string
          parent_phone: string
          parent_occupation: string | null
          emergency_contact: string | null
          medical_conditions: string | null
          admission_date: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          admission_number: string
          date_of_birth: string
          gender: string
          blood_group?: string | null
          parent_name: string
          parent_email: string
          parent_phone: string
          parent_occupation?: string | null
          emergency_contact?: string | null
          medical_conditions?: string | null
          admission_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          admission_number?: string
          date_of_birth?: string
          gender?: string
          blood_group?: string | null
          parent_name?: string
          parent_email?: string
          parent_phone?: string
          parent_occupation?: string | null
          emergency_contact?: string | null
          medical_conditions?: string | null
          admission_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      teachers: {
        Row: {
          id: string
          employee_id: string
          date_of_birth: string
          gender: string
          qualification: string
          specialization: string
          experience_years: number
          joining_date: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          employee_id: string
          date_of_birth: string
          gender: string
          qualification: string
          specialization: string
          experience_years?: number
          joining_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          date_of_birth?: string
          gender?: string
          qualification?: string
          specialization?: string
          experience_years?: number
          joining_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          grade: string
          section: string
          capacity: number
          academic_year: string
          homeroom_teacher_id: string | null
          description: string | null
          room_number: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          grade: string
          section: string
          capacity?: number
          academic_year: string
          homeroom_teacher_id?: string | null
          description?: string | null
          room_number?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          grade?: string
          section?: string
          capacity?: number
          academic_year?: string
          homeroom_teacher_id?: string | null
          description?: string | null
          room_number?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      subjects: {
        Row: {
          id: string
          name: string
          code: string
          description: string | null
          credits: number
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          description?: string | null
          credits?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          description?: string | null
          credits?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      class_subjects: {
        Row: {
          id: string
          class_id: string
          subject_id: string
          teacher_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          subject_id: string
          teacher_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          subject_id?: string
          teacher_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      teacher_subjects: {
        Row: {
          id: string
          teacher_id: string
          subject_id: string
          created_at: string
        }
        Insert: {
          id?: string
          teacher_id: string
          subject_id: string
          created_at?: string
        }
        Update: {
          id?: string
          teacher_id?: string
          subject_id?: string
          created_at?: string
        }
      }
      student_classes: {
        Row: {
          id: string
          student_id: string
          class_id: string
          roll_number: number | null
          joining_date: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          class_id: string
          roll_number?: number | null
          joining_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          class_id?: string
          roll_number?: number | null
          joining_date?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      attendance: {
        Row: {
          id: string
          student_id: string
          class_id: string
          subject_id: string | null
          date: string
          status: string
          notes: string | null
          marked_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          class_id: string
          subject_id?: string | null
          date?: string
          status: string
          notes?: string | null
          marked_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          class_id?: string
          subject_id?: string | null
          date?: string
          status?: string
          notes?: string | null
          marked_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      grades: {
        Row: {
          id: string
          student_id: string
          class_id: string
          subject_id: string
          assessment_name: string
          assessment_type: string
          term: string
          max_score: number
          score: number
          grade: string | null
          remarks: string | null
          assessment_date: string
          graded_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          class_id: string
          subject_id: string
          assessment_name: string
          assessment_type: string
          term: string
          max_score: number
          score: number
          grade?: string | null
          remarks?: string | null
          assessment_date: string
          graded_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          class_id?: string
          subject_id?: string
          assessment_name?: string
          assessment_type?: string
          term?: string
          max_score?: number
          score?: number
          grade?: string | null
          remarks?: string | null
          assessment_date?: string
          graded_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      timetable_slots: {
        Row: {
          id: string
          slot_number: number
          start_time: string
          end_time: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slot_number: number
          start_time: string
          end_time: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slot_number?: number
          start_time?: string
          end_time?: string
          created_at?: string
          updated_at?: string
        }
      }
      timetable_entries: {
        Row: {
          id: string
          class_id: string
          subject_id: string
          teacher_id: string | null
          day: string
          slot_id: string
          room_number: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          subject_id: string
          teacher_id?: string | null
          day: string
          slot_id: string
          room_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          subject_id?: string
          teacher_id?: string | null
          day?: string
          slot_id?: string
          room_number?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'admin' | 'teacher' | 'student'
      weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}