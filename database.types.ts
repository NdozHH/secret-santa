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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Event: {
        Row: {
          createdAt: string
          date: string
          id: string
          name: string
          sendReminder: boolean
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          date: string
          id: string
          name: string
          sendReminder?: boolean
          updatedAt: string
        }
        Update: {
          createdAt?: string
          date?: string
          id?: string
          name?: string
          sendReminder?: boolean
          updatedAt?: string
        }
        Relationships: []
      }
      Pairing: {
        Row: {
          createdAt: string
          eventId: string
          id: string
          personId: string
          santaId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          eventId: string
          id: string
          personId: string
          santaId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          eventId?: string
          id?: string
          personId?: string
          santaId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Pairing_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Pairing_personId_fkey"
            columns: ["personId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Pairing_santaId_fkey"
            columns: ["santaId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      ThankYou: {
        Row: {
          createdAt: string
          eventId: string
          id: string
          message: string
          toUserId: string
          userId: string
        }
        Insert: {
          createdAt?: string
          eventId: string
          id: string
          message: string
          toUserId: string
          userId: string
        }
        Update: {
          createdAt?: string
          eventId?: string
          id?: string
          message?: string
          toUserId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ThankYou_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ThankYou_toUserId_fkey"
            columns: ["toUserId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ThankYou_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          avatar: string | null
          createdAt: string
          email: string
          firstName: string | null
          id: string
          lastName: string | null
          password: string
          role: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Insert: {
          avatar?: string | null
          createdAt?: string
          email: string
          firstName?: string | null
          id: string
          lastName?: string | null
          password: string
          role?: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Update: {
          avatar?: string | null
          createdAt?: string
          email?: string
          firstName?: string | null
          id?: string
          lastName?: string | null
          password?: string
          role?: Database["public"]["Enums"]["Role"]
          updatedAt?: string
        }
        Relationships: []
      }
      UserStatus: {
        Row: {
          eventId: string
          id: string
          status: Database["public"]["Enums"]["Status"]
          userId: string
        }
        Insert: {
          eventId: string
          id: string
          status: Database["public"]["Enums"]["Status"]
          userId: string
        }
        Update: {
          eventId?: string
          id?: string
          status?: Database["public"]["Enums"]["Status"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "UserStatus_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserStatus_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      WishList: {
        Row: {
          createdAt: string
          eventId: string
          id: string
          name: string
          order: number | null
          siteDescription: string | null
          siteImage: string | null
          siteTitle: string | null
          updatedAt: string
          url: string
          userId: string
        }
        Insert: {
          createdAt?: string
          eventId: string
          id: string
          name: string
          order?: number | null
          siteDescription?: string | null
          siteImage?: string | null
          siteTitle?: string | null
          updatedAt: string
          url: string
          userId: string
        }
        Update: {
          createdAt?: string
          eventId?: string
          id?: string
          name?: string
          order?: number | null
          siteDescription?: string | null
          siteImage?: string | null
          siteTitle?: string | null
          updatedAt?: string
          url?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "WishList_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "Event"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "WishList_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Role: "ADMIN" | "USER"
      Status: "INVITED" | "DECLINED" | "ACCEPTED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
