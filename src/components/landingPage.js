import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import NavBar from "./navBar";
import { uploadToGCS, uploadSuccessToken } from "../APICalls/uploadAPI";

export default function LandingPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const history = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleFileUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    // const formDataSuccessToken = new FormData();

    if (selectedFiles.length === 0) {
      setUploadMessage(false);
      setLoading(false);
    } else {
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });
      // formDataSuccessToken.append("file", selectedFiles[0]);
      let result = await uploadToGCS(formData);
      // await uploadSuccessToken(formDataSuccessToken);

      console.log("All files upload complete! Triggering Cloud Function...");
      console.log(result);
      setLoading(false);
      setUploadMessage(true);
    }
  };

  // function to confirm submission

  const handleFileSubmission = async () => {
    setSubmitLoading(true);
    const formDataSuccessToken = new FormData();
    formDataSuccessToken.append("file", selectedFiles[0]);
    await uploadSuccessToken(formDataSuccessToken).then(() => {
      history("/dashboard", { replace: true });
    });
    setSubmitLoading(false);
    setSubmitMessage(true);
  };

  return (
    <div className="App">
      <NavBar />

      <div className="h-screen flex">
        <div className="m-auto">
          <div className="shadow-md rounded-md max-w-3xl ">
            <div className="flex justify-center pt-3">
              <p className="text-lg font-semibold  pt-[0%]">
                Intelligent Document Extractor
              </p>
            </div>
            <div className="flex justify-center"></div>
            <div className="flex justify-evenly py-[1%]"></div>

            <div className="px-[1%]">
              <p className="font-karla mt-[2%] text-sm ">
                This is an automated document extractor framework, that extracts
                key information by leveraging Document AI from a variety of
                document types (currently supports PDF/JPEG/PNG file formats)
                and stores them in Google Big Query for validation and
                analytics. Click below to upload files.
              </p>
            </div>

            <div className="flex justify-center pt-[5%]">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="font-karla pl-[10%] cursor-pointer text-sm"
              />
            </div>
            <div className="flex justify-center cursor-pointer pb-[3%] pt-[2%] text-sm">
              <Button
                content="Upload"
                loading={loading}
                color="green"
                icon="upload"
                onClick={handleFileUpload}
              />
              <Button
                color="green"
                loading={submitLoading}
                icon="checkmark"
                content="Submit"
                onClick={handleFileSubmission}
              />
            </div>
            <div className="flex justify-center font-karla text-bold">
              {uploadMessage === true && <p>Upload Complete!</p>}{" "}
            </div>
            <div className="flex justify-center font-karla text-bold">
              {uploadMessage === false && <p>Upload Failed!</p>}{" "}
            </div>

            <div className="flex justify-center font-karla text-bold">
              {submitMessage === false && <p>Submission Failed.</p>}{" "}
            </div>
            <div className="flex justify-center font-karla text-bold">
              {submitMessage === true && <p>Submission Successful.</p>}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
