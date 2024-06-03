import React from "react";

export default function Project({ params }: {params: { projectId: string } }) {
  return (
    <div>Project {params.projectId} Page</div>
  );
}
