import useSupabase from '@/libs/supabase';

const { client: supabase } = useSupabase();
export default function productModel() {
  // const fetchProducts = async (query: string, page: number, limit: number) => {
  //   // let { data: products, error } = await supabase
  //   //   .from('products')
  //   //   .select('*')
  //   //   .range((page - 1) * limit, limit);

  //   let { data: products, error } = await supabase
  //   .from('products')
  //   .select('id')

  //   console.log(products);

  //   return products;
  // };

  //rec:10 page:2 limit: 5
  const fetchProducts = async (query: string, page: number, limit: number) => {
    let loading = false;
    let productList = null;
    let totalRecords = 0;
    try {
      loading = true;

      let supabaseQuery = await supabase
        .from('products')
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

  const fetchProduct = async (id: number) => {
    let loading = false;
    let product = null;
    try {
      loading = true;

      let { data, error, status } = await supabase.from('products').select('*').eq('id', id).single();

      if (error && status !== 406) throw error;

      if (data) {
        product = data;
      }
    } catch (error) {
      console.error(error);
      error;
    } finally {
      loading = false;
    }

    return { loading, product };
  };

  const createProduct = async () => {};

  const updateProduct = async () => {};

  const deleteProduct = async (id: number) => {};

  return {
    fetchProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
