import { useState } from 'react';
import todoImages from '../images/todos-project.jpg';
import { Sidebar, NewProject, NoPorject } from './components';
import { ProjectsType } from '../../../../models';

export default function Projects() {
  const [projectState, setProjectState] = useState<ProjectsType>({
    selectedProjectId: undefined,
    projects: []
  });

  const handelStartProjects = () => {
    setProjectState((prev) => ({ ...prev, selectedProjectId: null }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${todoImages})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="min-h-screen w-full bg-slate-300 rounded-lg flex gap-5"
    >
      <Sidebar
        onStartAddProject={handelStartProjects}
        projects={projectState.projects}
        setProjectState={setProjectState}
      />
      <div className="w-full h-full py-2 px-1">
        {projectState.selectedProjectId === null ? (
          <NewProject setProjectState={setProjectState} />
        ) : projectState?.selectedProjectId === undefined ? (
          <NoPorject onStartAddProject={handelStartProjects} projects={projectState.projects} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
