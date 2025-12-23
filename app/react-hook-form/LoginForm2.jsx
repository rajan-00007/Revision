'use client'

import { useForm } from "react-hook-form";
import {
  Container,
  Form,
  Input,
  Error,
  Button,
  Title,
  Field,
} from "./Validation.styles";

function ValidationDemo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const passwordValue = watch("password");

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Title>React Hook Form – Validation Demo</Title>

        {/* Required */}
        <Field>
          <Input
            placeholder="Username (Required)"
            hasError={errors.username}
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </Field>

        {/* Min Length */}
        <Field>
          <Input
            placeholder="Nickname (Min 3 chars)"
            hasError={errors.nickname}
            {...register("nickname", {
              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },
            })}
          />
          {errors.nickname && <Error>{errors.nickname.message}</Error>}
        </Field>

        {/* Max Length */}
        <Field>
          <Input
            placeholder="Code (Max 5 chars)"
            hasError={errors.code}
            {...register("code", {
              maxLength: {
                value: 5,
                message: "Maximum 5 characters allowed",
              },
            })}
          />
          {errors.code && <Error>{errors.code.message}</Error>}
        </Field>

        {/* Pattern */}
        <Field>
          <Input
            placeholder="Email (Pattern validation)"
            hasError={errors.email}
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Field>

        {/* Custom Validate */}
        <Field>
          <Input
            placeholder="No 'admin' allowed"
            hasError={errors.role}
            {...register("role", {
              validate: (value) =>
                value !== "admin" || "Admin is not allowed",
            })}
          />
          {errors.role && <Error>{errors.role.message}</Error>}
        </Field>

        {/* Password */}
        <Field>
          <Input
            type="password"
            placeholder="Password (Watch example)"
            hasError={errors.password}
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Field>

        {/* Confirm Password */}
        <Field>
          <Input
            type="password"
            placeholder="Confirm Password"
            hasError={errors.confirmPassword}
            {...register("confirmPassword", {
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <Error>{errors.confirmPassword.message}</Error>
          )}
        </Field>
                                                                  
        {/* ALL validations */}          
        <Field>
          <Input
            type="password"
            placeholder="Strong Password (All validations)"
            hasError={errors.strongPassword}
            {...register("strongPassword", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters allowed",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
                message:
                  "Must include uppercase, lowercase, number & special character",
              },
              validate: (value) =>
                !value.includes("password") ||
                "Password should not contain 'password'",
            })}
          />
          {errors.strongPassword && (
            <Error>{errors.strongPassword.message}</Error>
          )}
        </Field>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ValidationDemo;
