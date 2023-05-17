declare namespace Category {
  interface Item {
    created_at: string | null;
    created_by: string | null;
    description: string | null;
    id: number;
    is_active: boolean;
    is_delete: boolean;
    name: string | null;
    ordering: number | null;
    updated_at: string | null;
  }

  interface Detail {
    created_at?: string | null;
    created_by?: string | null;
    description?: string | null;
    id?: number;
    is_active?: boolean;
    is_delete?: boolean;
    name?: string | null;
    ordering?: number | null;
    updated_at?: string | null;
  }
}
