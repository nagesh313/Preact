export const AttachmentIcon = ({ extension }) => {
  const fileName =
    "fa fa-file-" + determineIconFromExtension(extension) + "-o fa-3x";
  return <i class={fileName} aria-hidden="true" />;
};
function determineIconFromExtension(ext) {
  switch (ext) {
    case "xls":
    case "xlsx":
      return "excel";
    case "doc":
    case "docx":
      return "word";
    case "ppt":
    case "pptx":
      return "powerpoint";
    default:
      return "text";
  }
}
