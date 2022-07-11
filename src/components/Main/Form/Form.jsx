import React from "react";
import './Form.css';
import { useForm } from "react-hook-form";
import PhoneCall from './imgForm/Postpaid.png';
import Phone from './imgForm/phone call.png';
import Call from './imgForm/Group 175.png';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <div className="form-img-wrap">
          <img src={Phone} alt="Phone" className="form-img-phone" />
        </div>
        <div className="form">
          <h3 className="form__h3">Обсудить проект</h3>
          <div className="form__title">
            Расскажите о своих бизнес-целях и мы поможем вам в их достижении
          </div>
          <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <input
                type="text"
                placeholder="Имя"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form__group">
              <input
                type="text"
                placeholder="Telegram/Viber"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form__group">
              <input
                type="text"
                placeholder="Email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="button form__button"
              value="Отправить"
            />
          </form>
          <img
            src={PhoneCall}
            alt="PhoneCall"
            className="form__img-phoneCall"
          />
        </div>
        <div className="form-img-wrap">
          <img src={Call} alt="Call" className="form-img-call" />
        </div>
      </div>
    </div>
  );
}