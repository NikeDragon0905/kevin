import React from "react";

import { useForm } from "react-hook-form";
const EmailConfirmModal = ({ portfolio }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    axios.post("/mail", data).then((res) => console.log(res));
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Please provider your Gmail credentials</h3>
          <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <input
                    {...register("name", { required: true })}
                    type="password"
                    name="password"
                    placeholder=""
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="invalid-feedback">
                      Please provide your password
                    </span>
                  )}
                </div>
              </div>
              {/* End .col */}

              {/* End .col */}

              <div className="col-12">
                <button type="submit" className="button">
                  <span className="button-text">Send Message</span>
                  <span className="button-icon fa fa-send"></span>
                </button>
              </div>
              {/* End .col */}
            </div>
          </form>
          {/* End .row */}
        </figcaption>
      </figure>
    </div>
    //  End .slideshow
  );
};

export default EmailConfirmModal;
