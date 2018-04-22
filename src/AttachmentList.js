import { AttachmentCard } from "./AttachmentCard";

export const AttachmentList = props => {
  return (
    <div>
      {props.list.map(attachment => {
        return <AttachmentCard attachmentDetails={attachment} />;
      })}
    </div>
  );
};
