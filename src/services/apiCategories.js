import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error("Categories could not be loaded");
  }

  return data;
}
