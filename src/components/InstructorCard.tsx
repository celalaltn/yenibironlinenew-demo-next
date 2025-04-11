import React from "react";

interface InstructorCardProps {
  imageSrc: string;
  name: string;
  students: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  imageSrc,
  name,
  students,
}) => {
  return (
    <article className="overflow-hidden relative grow shrink p-px rounded-3xl min-w-60 w-[221px]">
      <a
        href="#"
        className="flex absolute inset-px z-0 max-w-full min-h-[383px] w-[274px]"
      />

      <figure className="flex z-0 flex-col justify-center items-center w-full bg-white aspect-square">
        <img
          src={imageSrc}
          className="object-contain w-full aspect-[0.99]"
          alt={name}
        />
      </figure>

      <div className="flex z-0 flex-col flex-1 items-start py-5 pr-6 pl-4 w-full font-semibold bg-white max-md:pr-5">
        <span className="text-sm leading-none uppercase text-slate-600">
          Instructor
        </span>

        <h3 className="mt-4 text-xl leading-snug text-gray-900">{name}</h3>

        <span className="mt-5 text-xs leading-none text-neutral-500">
          Courses taken by {students} people
        </span>
      </div>
    </article>
  );
};

export default InstructorCard;
