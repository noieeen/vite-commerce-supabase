import useSupabase from '@/libs/supabase';

const { client: supabase } = useSupabase();
export default function categoryModel() {
  const fetchCategories = async (query: string, page: number, limit: number) => {
    let loading = false;
    let productList = null;
    let totalRecords = 0;
    try {
      loading = true;

      let supabaseQuery = await supabase
        .from('category')
        .select('*')
        .eq('is_delete', false)
        .ilike('name', `%${query}%`)
        .range((page - 1) * limit, page * limit - 1)
        .order('id');

      let { data, error, status } = await supabaseQuery;
      // .limit(limit)
      // .offset((page - 1) * limit);

      if (error && status !== 406) throw error;

      if (data) {
        productList = data;
      }
    } catch (error) {
      console.error(error);
      error;
    } finally {
      loading = false;
    }

    return { loading, productList, totalRecords };
  };

  const fetchAllCategories = async () => {
    // let supabaseQuery = await supabase.from('category').select('*');//.eq('is_active', true).eq('is_deleted', true);

    const { data, error, status } = await supabase.from('category').select('*');//.eq('is_active', true).eq('is_deleted', true);;

    if (error && status !== 406) throw error;

    return { data, error };
  };

  const fetchCategory = async (id: number) => {
    let loading = false;
    let category = null;
    try {
      loading = true;

      let { data, error, status } = await supabase.from('category').select('*').eq('id', id).single();

      if (error && status !== 406) throw error;

      if (data) {
        category = data;
      }
    } catch (error) {
      console.error(error);
      error;
    } finally {
      loading = false;
    }

    return { loading, category };
  };

  const createCategory = async (category: Product.Detail) => {
    const { data, error } = await supabase.from('category').insert([category]);
    return { data, error };
  };

  const updateCategory = async (category: Product.Detail) => {
    const { data, error } = await supabase.from('category').update(category).eq('id', category.id);
    return { data, error };
  };

  const deleteCategory = async (product_id: number) => {
    const { data, error } = await supabase.from('category').update({ is_delete: true }).eq('id', product_id);
    return { data, error };
  };

  return {
    fetchCategories,
    fetchAllCategories,
    fetchCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
}
