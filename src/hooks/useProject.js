import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProject } from "../services/apiProjects";

export function useProject() {
  const { id: projectId } = useParams();

  const {
    isLoading,
    data: project,
    error,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
    retry: false,
  });

  return { isLoading, error, project };
}
