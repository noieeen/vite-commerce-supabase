declare namespace Product {
  interface Item {
    category_desc: string | null;
    category_id: number | null;
    created_at: string | null;
    created_by: string | null;
    description: string | null;
    id: number;
    image_url: string | null;
    is_active: boolean;
    is_delete: boolean;
    name: string | null;
    price: number | null;
    SKU: string | null;
    stock: number | null;
  }
  interface Detail {
    category_desc?: string | null;
    category_id?: number | null;
    created_at?: string | null;
    created_by?: string | null;
    description?: string | null;
    id?: number;
    image_url?: string | null;
    is_active?: boolean;
    is_delete?: boolean;
    name?: string | null;
    price?: number | null;
    SKU?: string | null;
    stock?: number | null;
  }
}
