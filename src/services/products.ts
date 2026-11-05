export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

type ProductsResponse = {
  success: boolean;
  products: Product[];
};

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch("/api/products", {
    signal,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data = (await response.json()) as ProductsResponse;

  if (!data.success) {
    throw new Error("A API retornou um erro ao carregar os produtos.");
  }

  if (!Array.isArray(data.products)) {
    throw new Error("A API retornou produtos em um formato inválido.");
  }

  return data.products;
}
