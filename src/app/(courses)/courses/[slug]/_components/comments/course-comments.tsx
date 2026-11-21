"use client";


// next
import { useParams } from "next/navigation";

// react
import { Fragment, useEffect } from "react";

// thirdparty lib
import { useInView } from "react-intersection-observer";

// custom hook react query
import { useCourseComments } from "../../_api/get-comments";

// icons
import { IconRefresh } from "@/app/_components/icons/icons";

// component

import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placeholders";
import Button from "@/app/_components/button/Button";
import Alert from "@/app/_components/alert/alert";

const CourseComments = () => {

  
  const { slug } = useParams();

  const { ref, inView } = useInView();

  const {
    data: comments,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage&&!isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage,isFetching]);

  if (error) {
    return (
      <>
        <Alert variant={"error"}>خطا در برقراری ارتباط با سرور</Alert>
        <div className={"text-center mt-3"}>
          <Button
            variant="neutral"
            className={"font-semibold"}
            isOutline={true}
            shape={"wide"}
            onClick={() => refetch()}
          >
            <IconRefresh />
            تلاش مجدد
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {comments?.pages.map((currentPage, index) => (
        <Fragment key={`comment-page-${index}`}>
          {currentPage.data.map((comment) => (
            <Comment
              {...comment}
              variant="info"
              key={`comment-${comment.id}`}
            />
          ))}
        </Fragment>
      ))}

      {(isFetching || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </>
  );
};
export default CourseComments;
