import { useForm } from 'react-hook-form';
import Button from '../../../../../../custom/button';
import Input from '../../../../../../custom/input';
import Textarea from '../../../../../../custom/textarea';
import { NewTodoType, ProjectsType } from '../../../../../../models';
import { Dispatch, SetStateAction } from 'react';
const labelStyles = 'text-yellow-500 font-bold text-lg';
const inputsClassName = 'py-1 rounded-md outline-none px-2 focus:ring-2 focus:ring-indigo-800';
import { useReactContext } from '../../../../../../context/context';
type NewProjectProps = {
  setProjectState: Dispatch<SetStateAction<ProjectsType>>;
};
export default function NewProject({ setProjectState }: NewProjectProps) {
  const { projectsInfo, setProjectsInfo } = useReactContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewTodoType>({
    defaultValues: projectsInfo ?? {}
  });

  const onSubmit = (data: NewTodoType) => {
    setProjectState((prev) => {
      const isEdit = Boolean(projectsInfo);
      const updatedProjects = isEdit
        ? prev.projects.map((it) => (it.id === projectsInfo?.id ? { ...it, ...data, id: it.id } : it))
        : [...prev.projects, { id: prev.projects.length + 1, ...data }];
      return {
        ...prev,
        projects: updatedProjects,
        selectedProjectId: undefined
      };
    });
    reset({
      date: '',
      description: '',
      title: ''
    });
    setProjectsInfo(null);
  };

  const onCancel = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined
    }));
    setProjectsInfo(null);
    reset({
      date: '',
      description: '',
      title: ''
    });
  };

  console.log(projectsInfo);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full h-max  bg-pink-600/50 rounded-lg backdrop-filter backdrop-blur-md p-2 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-2">
        <Input
          {...register('title', { required: 'title is Required!' })}
          className={inputsClassName}
          label="title"
          styles={{ labelClassName: labelStyles }}
          error={errors.title && errors.title.message}
        />
        <Input
          {...register('date', { required: 'date is Required!' })}
          className={inputsClassName}
          label="Due- Date"
          type="date"
          styles={{ labelClassName: labelStyles }}
          error={errors.date && errors.date.message}
        />
        <Textarea
          {...register('description', { required: 'description is Required !' })}
          className={inputsClassName}
          label="Description"
          rows={6}
          styles={{ labelClassName: labelStyles }}
          error={errors.description && errors.description.message}
        />
      </div>
      <div className="flex h-full justify-end p-2 gap-3">
        <Button type="submit" className=" p-2 bg-rose-800 text-white rounded-md">
          {projectsInfo ? 'update' : 'save'}
        </Button>
        <Button onClick={onCancel} className="text-rose-800 border border-rose-800 rounded-md p-1">
          Cancel
        </Button>
      </div>
    </form>
  );
}
