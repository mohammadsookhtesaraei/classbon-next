
import React from "react";
import { CommentProps } from "@/app/_components/comment/comment.types";
import { API_URL } from "@/configs/global";
import { Avatar } from "@/app/_components/avatar";
import { Rating } from "@/app/_components/rating";

export const Comment: React.FC<CommentProps> = ({
  userId,
  fullName,
  date,
  commentText,
  score,
  isResponse,
  variant = "neutral",
}) => {
  const srcPath = userId
    ? `${API_URL}/picture/${userId}`
    : undefined;

  const positionClass = isResponse ? "end" : "start";

  const bubbleClass = isResponse
    ? `comment-bubble-${variant}`
    : "comment-bubble-neutral";

  return (
    <div className={`comment comment-${positionClass}`}>

        {/* avatar-comment */}
      <div className="comment-image">
        <Avatar
          src={srcPath}
          size="tiny"
          variant={isResponse ? variant : "neutral"}
        />
      </div>
      
      {/* comment-header */}
      <div className="comment-header">
        {fullName}
        <time className="text-xs opacity-50 mx-2">
          {date}
        </time>
      </div>
     
     {/* comment-text */}
      <div className={`comment-bubble ${bubbleClass}`}>
        {commentText}
      </div>
     
     {/* comment-rating */}
      {score != null && score > 0 && (
        <div className="comment-footer">
          <Rating
            rate={score}
            size="tiny"
            variant="accent"
          />
        </div>
      )}
    </div>
  );
};
