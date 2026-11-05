import Testimonialitem from "@/app/_components/testomonial/testimonial-item";

import { TestimonialListProps } from "@/app/_components/testomonial/testomonial-type";

const TestiMoniallist: React.FC<TestimonialListProps> = ({
  testimonials,
}: TestimonialListProps) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n-1)]:translate-y-16">
      {testimonials.map((item) => (
        <Testimonialitem key={`testimonial-${item.name}`} testimonial={item} />
      ))}
    </div>
  );
};
export default TestiMoniallist;
