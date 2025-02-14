import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProjectTechnologies } from "../services/apiProjects";

export function useProjectTechnologies() {
  const { id: projectId } = useParams();

  const {
    isLoading,
    data: projectTechnologies,
    error,
  } = useQuery({
    queryKey: ["projectTechnologies", projectId],
    queryFn: () => getProjectTechnologies(projectId),
    retry: false,
  });

  return { isLoading, error, projectTechnologies };
}
