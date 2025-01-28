import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

function GetintouchForm() {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    try {
      const response = await fetch("https://formspree.io/f/xnnnkpny", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        toast.success(
          "Thank you for your message. I&aposll get back to you shortly.",
          result
        );
        reset();
      } else {
        toast.error("Form submission failed", response.statusText);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  function onError(errors) {
    if (errors?.name?.message) toast.error(errors.name.message);
    else if (errors?.email?.message) toast.error(errors.email.message);
    else if (errors?.phone?.message) toast.error(errors.phone.message);
    else if (errors?.message?.message) toast.error(errors.message.message);
  }

  return (
    <div className="getintouch-text-container">
      <div className="form">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormRow label="Name">
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </FormRow>
          <FormRow label="Email">
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              {...register("email", {
                required: "Email is required",
                pattern: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;",
              })}
            />
          </FormRow>
          <FormRow label="Phone">
            <input
              type="text"
              id="phone"
              name="phone"
              className="input small"
              {...register("phone")}
            />
          </FormRow>
          <FormRow label="Message">
            <textarea
              id="message"
              name="message"
              rows="5"
              className="input"
              {...register("message", {
                required: "Message is required",
              })}
            ></textarea>
          </FormRow>
          <FormRow>
            <Button
              isReset={true}
              className="button-secondary button button-md"
            >
              Cancel
            </Button>
            <Button className="button-secondary button button-md">
              Submit
            </Button>
          </FormRow>
        </Form>
      </div>
    </div>
  );
}

export default GetintouchForm;
