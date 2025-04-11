"use client";
import React from "react";
import InstructorCard from "./InstructorCard";

const InstructorSection = () => {
  const instructors = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bda7603539329fed4b18fc62779691fa5416a61c?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      name: "Sadie Nardini",
      students: "756,353",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/49dc6c21b65f3383f6caa340311ee6ce2524cd2f?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      name: "Tristan Gatto",
      students: "228,186",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b687bb94e0c5831066f266a651c90623cdadaa90?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      name: "Gina Spriggs",
      students: "72,538",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1255dd2f32b50f3173af074866520ab97b7e9ce9?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      name: "Simone Heng",
      students: "4,075",
    },
  ];

  return (
    <section className="flex flex-col px-16 mt-20 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
      <h2 className="self-center text-4xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:max-w-full">
        Let Trusted Experts Illuminate Your Path
      </h2>

      <div className="flex overflow-hidden flex-wrap gap-4 justify-center mt-8 w-full max-md:max-w-full">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            imageSrc={instructor.imageSrc}
            name={instructor.name}
            students={instructor.students}
          />
        ))}
      </div>
    </section>
  );
};

export default InstructorSection;
