"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schema/registerSchema";
import { z } from "zod";

import {
  Form,
  Input,
  Select,
  CheckboxContainer,
  Label,
  ErrorText,
  Button,
} from "./register.styles";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm(){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      skills: [],
      address: {
        city: "",
        pincode: "",
      },
    },
  });

  const onSubmit = (data: RegisterFormData): void => {
    console.log("FORM DATA:", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* NAME */}
      <div>
        <Input placeholder="Name" {...register("name")} />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </div>

      {/* EMAIL */}
      <div>
        <Input placeholder="Email" {...register("email")} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </div>

      {/* PASSWORD */}
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </div>
      {/* CONFIRM PASSWORD */}
      <div>
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}
      </div>

      {/* AGE */}
      <div>
        <Input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <ErrorText>{errors.age.message}</ErrorText>}
      </div>

      {/* ROLE */}
      <div>
        <Select {...register("role")}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </Select>
        {errors.role && <ErrorText>{errors.role.message}</ErrorText>}
      </div>

      {/* ADDRESS */}
      <div>
        <Input placeholder="City" {...register("address.city")} />
        {errors.address?.city && (
          <ErrorText>{errors.address.city.message}</ErrorText>
        )}

        <Input placeholder="Pincode" {...register("address.pincode")} />
        {errors.address?.pincode && (
          <ErrorText>{errors.address.pincode.message}</ErrorText>
        )}
      </div>

      {/* SKILLS */}
      <CheckboxContainer>
        <Label>
          <input type="checkbox" value="react" {...register("skills")} /> React
        </Label>
        <Label>
          <input type="checkbox" value="node" {...register("skills")} /> Node
        </Label>
        <Label>
          <input type="checkbox" value="css" {...register("skills")} /> CSS
        </Label>
      </CheckboxContainer>
      {errors.skills && <ErrorText>{errors.skills.message}</ErrorText>}

      {/* TERMS */}
      <Label>
        <input type="checkbox" {...register("acceptTerms")} /> Accept Terms
      </Label>
      {errors.acceptTerms && (
        <ErrorText>{errors.acceptTerms.message}</ErrorText>
      )}

      {/* SUBMIT */}
      <Button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </Button>
    </Form>
  );
}

      
