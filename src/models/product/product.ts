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
    let productList: Product.Item[] = [];
    let totalRecords = 0;
    try {
      loading = true;

      let supabaseQuery = supabase
        .from('products')
        .select('*')
        .eq('is_delete', false)
        .ilike('name', `%${query}%`)
        .range((page - 1) * limit, page * limit - 1)
        .order('id');

      let { data, error, status } = await supabaseQuery;

      if (error && status !== 406) throw error;

      if (data) {
        productList = data.map((item: any) => {
          return {
            category_desc: item.category_desc,
            category_id: item.category_id,
            created_at: item.created_at,
            created_by: item.created_by,
            description: item.description,
            id: item.id,
            image_url: item.image_url,
            is_active: item.is_active,
            is_delete: item.is_delete,
            name: item.name,
            price: item.price,
            SKU: item.SKU,
            stock: item.stock,
          };
        });
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
    let product: Product.Detail | null = null;
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

  const createProduct = async (product: Product.Detail) => {
    const { data, error } = await supabase.from('products').insert([product]);
    return { data, error };
  };

  const updateProduct = async (product: Product.Detail) => {
    const { data, error } = await supabase.from('products').update(product).eq('id', product.id).select();
    return { data, error };
  };

  const deleteProduct = async (product_id: number) => {
    const { data, error } = await supabase.from('products').update({ is_delete: true }).eq('id', product_id);
    return { data, error };
  };

  const fetchRunningId = async () => {
    //select * from table_name order by id desc limit 1;
    let runningId = 0 as number;
    const { data, error } = await supabase.from('products').select('id').order('id', { ascending: false }).limit(1);
    if (data) {
      data.map((item) => {
        return (runningId = item.id);
      });
      runningId++;
    }

    return { runningId, error };
  };

  const uploadProductImage = async (file: any) => {
    const fileExt = file.name.split('.').pop();
    const filePath = `${Math.random()}.${fileExt}`;
    const { data, error } = await supabase.storage.from('products').upload(filePath, file);

    return { data, error };
  };

  const getProductImageUrl = async (path: string) => {
    let url = '';
    const { data, error } = await supabase.storage.from('products').download(path);
    if (data) {
      url = URL.createObjectURL(data);
    }
    return { url, error };
  };

  return {
    uploadProductImage,
    getProductImageUrl,
    fetchProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchRunningId,
  };
}
