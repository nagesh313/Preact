import { AttachmentIcon } from "./AttachmentIcon";
import { AttachmentMetadata } from "./AttachmentMetadata";

export const AttachmentCard = props => {
  const data = { fileName: "asdf.powerpoint", uploadedDate: "24-06-2018" };
  const fileSplit = props.attachmentDetails.fileName.split(".");
  const fileExtension = fileSplit[1];
  console.log(props.attachmentDetails);
  return (
    <div class="col-sm-4">
      <div class="thumbnail">
        <div class="row">
          <div class="col-sm-6">
            <AttachmentIcon extension={fileExtension} />
          </div>
          <div class="col-sm-6">
            <AttachmentMetadata data={props.attachmentDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};
