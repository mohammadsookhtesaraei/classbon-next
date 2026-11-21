import { useQuery } from "@tanstack/react-query";
import { CourseCommentList } from "../_types/course-comment.interface";
import { readData } from "@/core/http-service/http-service";

type GetCommentsOptions = {
    params: {
        slug: string,
        page: number,
    }
};



const getComments = ({ params }: GetCommentsOptions): Promise<CourseCommentList> => {
    const { slug, page } = params;
    const url = `/courses/${slug}/comments?page=${page}`
    return readData(url)
};


export const useCourseComments = ({ params }: GetCommentsOptions) => {
    const { data } = useQuery({
        queryKey: ["courseComments"],
        queryFn: () => getComments({ params }),
        staleTime: 5 * 60 * 60 * 1000, /* 5 hours - must be fresh */
        gcTime: 6 * 60 * 60 * 1000, /* 6 hours  in cache*/

    });

    return { data }
};