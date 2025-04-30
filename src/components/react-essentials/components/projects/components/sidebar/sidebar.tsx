import { Dispatch, SetStateAction } from 'react';
import Button from '../../../../../../custom/button';
import Image from '../../../../../../custom/img';
import { NewTodoType, ProjectsType } from '../../../../../../models';
import toDoIcon from '../../../icons/to-do-icon.png';
import { Items } from './components';
type SideBarProps = {
  onStartAddProject: () => void;
  projects: NewTodoType[];
  setProjectState: Dispatch<SetStateAction<ProjectsType>>;
};

export default function Sidebar({ onStartAddProject, projects, setProjectState }: SideBarProps) {
  return (
    <div className="h-full w-1/3 items-center  bg-indigo-600/80 rounded-r-lg backdrop-filter backdrop-blur-sm flex flex-col p-12 gap-5 shadow-md relative">
      <Image src={toDoIcon} width={100} height={100} alt="#" />
      <h1 className="text-2xl text-yellow-500/90 font-bold">Your Projects</h1>
      <Button
        onClick={onStartAddProject}
        className="bg-indigo-800 text-white p-2 rounded-md  active:scale-95 duration-300 hover:text-yellow-500"
      >
        +Add Project
      </Button>
      {projects.length > 0 ? (
        <Items projects={projects} setProjectState={setProjectState} />
      ) : (
        <span className="text-red-500  w-max  font-bold text-lg">You don't have any tasks yet</span>
      )}
    </div>
  );
}
