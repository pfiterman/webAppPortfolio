import supabase from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error("Projects could not be loaded");
  }

  return data;
}

export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    // Filters
    .eq("id", projectId)
    .single();

  if (error) {
    throw new Error("Project could not be found");
  }
  return data;
}

export async function getProjectTechnologies(projectId) {
  const { data, error } = await supabase
    .from("projects_technologies")
    .select("*, technologies(*)")
    .eq("projectId", projectId);

  if (error) {
    throw new Error("Booking not found");
  }

  return data;
}
