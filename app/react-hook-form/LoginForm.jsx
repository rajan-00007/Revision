'use client'
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>

      {/*Required Validation */}
      <input
        placeholder="Username (Required)"
        {...register("username", {
          required: "Username is required",
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      {/*Min Length Validation */}
      <input
        placeholder="Nickname (Min 3 chars)"
        {...register("nickname", {
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
        })}
      />
      {errors.nickname && <p>{errors.nickname.message}</p>}

      {/*Max Length Validation */}
      <input
        placeholder="Code (Max 5 chars)"
        {...register("code", {
          maxLength: {
            value: 5,
            message: "Maximum 5 characters allowed",
          },
        })}
      />
      {errors.code && <p>{errors.code.message}</p>}

      {/*Pattern Validation */}
      <input
        placeholder="Email (Pattern validation)"
        {...register("email", {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      {/*Custom Validate */}
      <input
        placeholder="No 'admin' allowed"
        {...register("role", {
          validate: (value) =>
            value !== "admin" || "Admin is not allowed",
        })}
      />
      {errors.role && <p>{errors.role.message}</p>}

      {/*Password */}
      <input
        type="password"
        placeholder="Password (Watch example)"
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      {/*Confirm Password (Using watch) */}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === passwordValue || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p>{errors.confirmPassword.message}</p>
      )}

      {/*ALL VALIDATIONS IN ONE FIELD */}
      <input
        type="password"
        placeholder="Strong Password (All validations)"
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
        <p>{errors.strongPassword.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationDemo;
