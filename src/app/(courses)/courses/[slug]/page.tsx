// type

import { type CourseDetails } from "@/types/course-details-interface";
import { Tab } from "@/types/tab.type";
import { Accordion as AccordionType } from "@/types/accordion";

// api
import { API_URL } from "@/configs/global";

// components

import { CourseAside } from "./_components/course-aside/course-aside";
import { Tabs } from "@/app/_components/tabs";

import { Accordion } from "@/app/_components/accordion";
import CourseComments from "./_components/comments/course-comments";

// types
import { CourseChapter } from "@/types/course-chapter.interface";
import CourseCurriculum from "@/app/(courses)/courses/[slug]/_components/course-curriculum/course-curriculum";
import Image from "next/image";
import VideoPlayer from "@/app/_components/video-player/video-player";

// generateStaticParams
export async function generateStaticParams() {
  const slug = await fetch(`${API_URL}/courses/slugs`).then((response) =>
    response.json(),
  );
  return (slug as string[]).map((slug) => ({
    slug: slug,
  }));
}

// getData function
async function getCourse(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
};

async function getCurriculum(slug: string): Promise<CourseChapter[]> {
  const response = await fetch(`${API_URL}/courses/${slug}/curriculum`);
  return await response.json();
};

const CourseDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const [course, courseCurriculum] = await Promise.all([
    getCourse(slug),
    getCurriculum(slug),
  ]);

  console.log(course);

  // faqs array for accordion component in tab array for tabs component
  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  // tab array with courseComments and accordion components
  const tabs: Tab[] = [
    {
      label: "مشخصات دوره",
      content: course.description,
    },
    {
      label: "دیدگاه ها  و پرسش",
      content: <CourseComments />,
    },
    {
      label: "سوالات متداول",
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="container grid grid-cols-10 gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

           <div className="mt-5">
                    {course.videoUrl ? (
                        <VideoPlayer src={course.videoUrl} poster={`${API_URL}/picture/${course.coverImageId}`}/>
                    ) : (
                        <Image src={`${API_URL}/picture/${course.coverImageId}`} alt={course.title}
                               width={550} height={327} className={"w-full"}/>
                    )}
                </div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs} />
      </div>

      <div className="col-span-10 xl:col-span-4">
        <div className={"sticky top-5"}>
          <h2 className={"mb-5 text-xl"}>سرفصل‌های دوره</h2>
          <CourseCurriculum data={courseCurriculum} />
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
