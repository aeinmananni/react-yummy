import { NewTodoType, ProjectsType } from '../../../../../../../../models';
import addIcon from '../../../../../icons/add.png';
import Image from '../../../../../../../../custom/img';
import { useReactContext } from '../../../../../../../../context/context';
import { Dispatch, SetStateAction } from 'react';
import { FiTrash2 } from 'react-icons/fi';
type ItemsProps = {
  projects: NewTodoType[];
  setProjectState: Dispatch<SetStateAction<ProjectsType>>;
};

export default function Items({ projects, setProjectState }: ItemsProps) {
  const { setProjectsInfo } = useReactContext();

  const hadelRemoveItem = (id: number) => {
    const filter = projects.filter((it) => it.id !== id);
    setProjectState((prev) => ({ ...prev, projects: filter, selectedProjectId: undefined }));
  };
  return (
    <>
      {projects.length > 0 && (
        <div className="w-full h-full  overflow-y-auto flex flex-col gap-2 ">
          {projects.map((it, index) => (
            <div
              key={index}
              className="flex flex-col  border-2 border-yellow-500 rounded-lg p-1 gap-1 shadow-md shadow-yellow-800 cursor-pointer relative"
              onClick={() => {
                setProjectsInfo(it);
                setProjectState((prev) => ({ ...prev, selectedProjectId: null }));
              }}
            >
              <FiTrash2
                className="absolute top-1 left-[45%]"
                size={20}
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  if (it.id) hadelRemoveItem(it.id);
                }}
              />
              <div className="flex justify-between items-center">
                <span className="p-0.5 w-6  h-6  flex justify-center items-center rounded-full text-white bg-yellow-500">
                  {it.id}
                </span>
                <Image src={addIcon} width={40} height={40} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-white  w-1/3 truncate">{it.title}</span>
                <span className="text-red-800 font-bold">{it.date}</span>
              </div>
              <span className="truncate">{it.description}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
