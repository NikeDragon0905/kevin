import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
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
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {/* <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                placeholder="YOUR PASSWORD"
              />
              {errors.password && errors.password.type === "required" && (
                <span className="invalid-feedback">
                  Please provide your password
                </span>
              )}
            </div>
          </div> */}
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
              />
              {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button" disabled>
              <span className="button-text">Coming Soon</span>
              {/* //Send Message */}
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
