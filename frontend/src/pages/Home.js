import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadAction,
  getDocumentsAction,
  downloadAction,
  setIsDataFetched,
} from "../store/action";
import generateQR from "../helpers/qrcode";
import Pagination from "../components/Pagination";
import QRCode from "qrcode";
import axios from "axios";

function HomePage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const documents = useSelector((state) => state.documents);
  const isDataFetched = useSelector((state) => state.isDataFetched);
  const currentPage = useSelector((state) => state.currentPage);
  const searchKeyword = useSelector((state) => state.searchKeyword);
  console.log(searchKeyword == true);

  const tes = useSelector((state) => state.tes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDataFetched == false) {
      dispatch(getDocumentsAction());
      dispatch(setIsDataFetched(true));
    }
  }, [documents, isDataFetched]);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadHandle = (event) => {
    event.preventDefault();
    // console.log(selectedFile);
    dispatch(uploadAction(selectedFile));
  };
  const downloadHandle = (event, doc) => {
    event.preventDefault();
    console.log(doc);
    dispatch(downloadAction(doc));
  };
  return (
    <>
      <div className="home">
        <Navbar />\
        <div className="content-container">
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="table-container">
          {/* <div className="Row">
          <input
            className="Column"
            type="file"
            name="file"
            accept=".pdf"
            id="myFile"
            onChange={changeHandler}
          />
          <button
            className="btn btn-primary upload-button Column"
            onClick={uploadHandle}
          >
            Upload PDF
          </button>
        </div> */}

          {/* <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="no-column">
                No
              </th>
              <th className="qr-image-column" scope="col">
                QR Code
              </th>
              <th scope="col">Pdf</th>
              <th scope="col" className="action-column">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!searchKeyword
              ? documents.map((doc, i) => {
                  if (
                    i + 1 > currentPage * 10 - 10 &&
                    i + 1 <= currentPage * 10
                  )
                    return (
                      <tr key={i}>
                        <th className="no-column">{i + 1}</th>
                        <td className="qr-image-column">
                          <img
                            className="qr-image"
                            src={generateQR(doc.url)}
                          ></img>
                        </td>
                        <td>{doc.name}</td>
                        <td className="action-column">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => downloadHandle(e, doc)}
                          >
                            {" "}
                            Download{" "}
                          </button>
                        </td>
                      </tr>
                    );
                })
              : documents.map((doc, i) => {
                  if (
                    doc.name.toLowerCase().includes(searchKeyword.toLowerCase())
                  ) {
                    return (
                      <tr key={i}>
                        <th className="no-column">{i + 1}</th>
                        <td className="qr-image-column">
                          <img
                            className="qr-image"
                            src={generateQR(doc.url)}
                          ></img>
                        </td>
                        <td>{doc.name}</td>
                        <td className="action-column">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => downloadHandle(e, doc)}
                          >
                            {" "}
                            Download{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
          </tbody>
        </table> */}
        </div>
        {!searchKeyword ? <Pagination /> : null}
      </div>
    </>
  );
}

export default HomePage;
