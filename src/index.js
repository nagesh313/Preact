import "./style";
import { Component, render } from "preact";
import { AttachmentList } from "./AttachmentList";
export default class App extends Component {
  componentDidMount() {}

  render() {
    const attachmentListData = [
      { fileName: "aaa.ppt", uploadedDate: "12-12-2016" },
      { fileName: "bbb.doc", uploadedDate: "12-7-2017" },
      { fileName: "ccc.xls", uploadedDate: "12-7-2017" },
      { fileName: "ddd.tsx", uploadedDate: "4-4-2017" }
    ];
    return (
      <div>
        <AttachmentList list={attachmentListData} />
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
