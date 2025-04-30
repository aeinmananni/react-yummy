import emptyToDo from '../../../icons/empty.png';
import Image from '../../../../../../custom/img';
import Button from '../../../../../../custom/button';
import { NewTodoType } from '../../../../../../models';

type NoProjectProps = {
  onStartAddProject: () => void;
  projects: NewTodoType[];
};

export default function NoProject({ onStartAddProject, projects }: NoProjectProps) {
  return (
    <div className="w-full h-1/2 bg-yellow-500/30 backdrop-filter backdrop-blur-md flex flex-col justify-evenly items-center rounded-md">
      <Image src={emptyToDo} alt="Emty To Do" width={140} height={140} />
      <div className="flex flex-col items-center gap-3 text-white">
        <span className="text-2xl">
          {projects.length > 0 ? (
            <span>
              You have{' '}
              <span className="bg-indigo-800 px-2 text-center rounded-full font-bold">{projects.length}</span>{' '}
              tasks in file
            </span>
          ) : (
            'No Project Select'
          )}
        </span>
        <span className="text-lg">
          {projects.length > 0
            ? `If you want, you can click on your tasks and update them`
            : ' project or get started with a new one'}
        </span>
      </div>
      {projects.length <= 0 && (
        <Button
          onClick={onStartAddProject}
          className="bg-indigo-800 text-white p-2 rounded-md  active:scale-95 duration-300 hover:text-yellow-500"
        >
          Create new project
        </Button>
      )}
    </div>
  );
}
