export const AttachmentMetadata = ({ data }) => {
  return (
    <div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">FileName:</div>
        <div class="col-xs-12 col-sm-6">{data.fileName}</div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">Uploaded by:</div>
        <div class="col-xs-12 col-sm-6">{data.uploadedDate}</div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button type="button" class="btn btn-info">
            <i class="fa fa-download" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
