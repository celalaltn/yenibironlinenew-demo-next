"use client";
import React from "react";
import CourseCard from "./CourseCard";

interface CourseSectionProps {
  title: string;
  type: "popular" | "new" | "featured" | "trending";
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, type }) => {
  // Different course data based on section type
  const getCourseData = () => {
    switch (type) {
      case "popular":
        return [
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/58f49d12eff27c3886478a8cc4447e5a427bf0e5?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Self-Discovery & Growth",
            title: "Clearing Physical and\nEmotional Clutter",
            instructor: "Stephanie Bennett Vogt",
            students: "47,871",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/7bfc0f7734d3d3f2a0e25ab9dada733038ec002c?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Psoas Stretches to\nRelieve Lower Back Pain",
            instructor: "Dakota Mays",
            students: "8,970",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/b573ee17685495718d1b2bd38a7926c3ca7ddb14?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Shedding Your\nMenopausal Middle in 10\nDays",
            instructor: "Jacqui Justice",
            students: "178,127",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/7b74a3930882085d3948e551d5417ffa9eb98efa?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "The Feldenkrais Way to\nHeal the Body",
            instructor: "Dayana Pereira",
            students: "13,293",
          },
        ];
      case "new":
        return [
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/f971eb0ebc984dceb4e8166e5196b43e598e315f?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "The Pelvic Floor and Flat\nBelly Formula",
            instructor: "Camille Beckstrand",
            students: "2,814",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/545205a1918b4a7e56ff7e56f3c6e43c4fd24d6a?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Exercises Your Body Will\nThank You For",
            instructor: "Erin Tietz",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/02cfeaf40060fbfa8e832dd907e842a4f610fee7?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Spiritual & Metaphysical",
            title: "The Neuroscience\nBehind Praying",
            instructor: "Angela Montano",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/3e386ddc7630d5e57c774684f1c44ca6221f4a94?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "The Perfect Workout for\nSeniors",
            instructor: "Alex Horton",
            students: "1,262",
          },
        ];
      case "featured":
        return [
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/234b0ec5c3b5e2c0d3d47ea813162ae9c3749e60?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Revitalize and Tone Your\nSleeping Glutes",
            instructor: "Tristan Gatto",
            students: "5,811",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/a02a4f5eb859b7d3a075cddf7037f69440e2690b?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "10-Minute Exercises for\nCortisol Control",
            instructor: "Sadie Nardini",
            students: "12,557",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/2133f8561ee5c669ea9863fd3c8507be54a5c4f6?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Relationships & Family",
            title: "Intimacy Without\nResponsibility",
            instructor: "Wendyne Limber",
            students: "35,272",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/8ffcf460ec8576971054f360dd2d5be51b1a6a6e?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "14-Day Pilates Body",
            instructor: "Alex Horton",
            students: "7,130",
          },
        ];
      case "trending":
        return [
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/7fd55e7ef51f535c2c0ecef291b02497fb24a55e?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Somatic Exercises to\nRelax and Release",
            instructor: "Sadie Nardini",
            students: "39,619",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae6aa296173445c7e4eb9f9d1874290c9e3bac0?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Self-Discovery & Growth",
            title: "7 Weeks to Self-Love",
            instructor: "Chris Armstrong",
            students: "31,100",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/ea9e5c9cfbf712f03c08f80f47de2294a0c5c5a3?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "Gentle Exercises to\nEliminate Your Neck\nHump",
            instructor: "Tristan Gatto",
            students: "18,848",
          },
          {
            imageSrc:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/3e306b287f154f0b92002287bfd5168e1568962d?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
            category: "Fitness & Body Self-Care",
            title: "8-Week Whole Body\nMakeover!",
            instructor: "Jannine Murray",
            students: "108,403",
          },
        ];
      default:
        return [];
    }
  };

  const courses = getCourseData();

  return (
    <section className="flex flex-col items-center px-16 pt-2 mt-20 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
      <h2 className="text-4xl font-semibold tracking-tighter leading-none text-center text-gray-900">
        {title}
      </h2>

      <div className="self-stretch mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${index > 0 ? "ml-5" : ""} w-3/12 max-md:ml-0 max-md:w-full`}
            >
              <CourseCard
                imageSrc={course.imageSrc}
                category={course.category}
                title={course.title}
                instructor={course.instructor}
                students={course.students}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 mt-6 w-[94px]">
        <button className="flex justify-center items-center bg-white rounded-3xl h-[42px] min-h-[42px] rotate-[3.141592653589793rad] w-[42px] focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fc16e2ee89243e3e8c18668423a7894d14fc330?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt="Previous"
          />
        </button>
        <button className="flex justify-center items-center bg-white rounded-3xl h-[42px] min-h-[42px] w-[42px] focus:outline-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da85c95e229f26842dcea814e49747da32f85a6?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
};

export default CourseSection;
