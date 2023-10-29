import React from "react";
import "../../../assets/css/CreateTextMedia.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const CreateText = () => {
  const navigate = useNavigate();

  const selectOption = [
    { label: "Clicks", value: "Select a label that that best suits your ad " },
    {
      label: "Clicks 1",
      value: "Select a label that that best suits your ad 1",
    },
    {
      label: "Clicks 2",
      value: "Select a label that that best suits your ad 2",
    },
    {
      label: "Clicks 3",
      value: "Select a label that that best suits your ad 3",
    },
  ];

  const handleSubmit = async () => {
    // Your form submission logic goes here

    // For demonstration purposes, let's assume the form submission is successful
    // Replace the following line with your actual form submission logic
    const isFormSubmitted = true;

    if (isFormSubmitted) {
      // Show the SweetAlert pop-up
      await Swal.fire({
        title: "Success!",
        text: "Your form was submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
        onClose: () => {
          navigate("/createAdds");
        },
      });
    }
  };

  return (
    <div className="createTextMedia">
      <div className="create-adds-container">
        <div className="headingAddsTextMedia">Create Text & Media</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <label for="heading01" className="form-label">
                Heading 01
              </label>
              <input
                type="text"
                className="form-control mt-2"
                id="heading01"
                placeholder="Add a heading that would make users interested"
              />
              <label for="heading02" className="form-label mt-3">
                Heading 02
              </label>
              <input
                type="text"
                className="form-control"
                id="heading02"
                placeholder="Add a heading that would make users interested"
              />
            </div>
            <div className="col-md-6">
              <label for="message" className="form-label">
                Description 01
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="5"
                placeholder="Add primary text to help users understand more about your products services or offers"
              ></textarea>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="businessName" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                placeholder="Add your business name"
              />
            </div>
            <div className="col-md-6">
              <label for="ButtonLabel" className="form-label">
                Button Label
              </label>
              <div className="custom-select-wrapper">
                <select
                  value="Select a label that that best suits your ad"
                  displayEmpty
                  inputProps={{ "aria-label": "Select" }}
                  style={{
                    padding: "0px !important",
                    marginRight: "10px",
                  }}
                  className="form-control custom-select"
                >
                  {selectOption.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <div className="arrow">&#9660;</div>
              </div>
              {/* <input
                type="text"
                className="form-control"
                id="ButtonLabel"
                placeholder="Select a label that that best suits your ad"
              /> */}
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <label for="email" className="form-label">
                Website URL
              </label>
              <input
                type="email"
                className="form-control"
                id="websiteURL"
                placeholder="Add the URL of the landing page you want to redirect users to"
              />
            </div>
          </div>

          <div className="row mt-3 buttons fixed-bottom">
            <div className="col-md-12 d-flex justify-content-end">
              <button
                type=""
                className="btn btn-secondary pl-1 pr-1"
                style={{
                  color: "rgba(34, 31, 31, 0.8)",
                  background: "#ececec",
                }}
              >
                <strong> Back</strong>
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateText;
