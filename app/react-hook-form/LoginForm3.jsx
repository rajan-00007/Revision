"use client";

import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function ShadcnRHFControlled() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agreeTerms: false,
    },
  });

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log("FORM DATA", data);
  };

  return (
    <div style={{ padding: 40 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: 320,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* UNCONTROLLED*/}
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        {/* CONTROLLED shadcn Select*/}
        <Controller
          name="role"
          control={control}
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}

        {/* CONTROLLED + DEFAULT VALUE */}
        <Controller
          name="agreeTerms"
          control={control}
          rules={{ required: "You must accept terms" }}
          render={({ field }) => (
            <>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
              <span>Accept Terms & Conditions</span>
            </>
          )}
        />
        {errors.agreeTerms && (
          <p style={{ color: "red" }}>{errors.agreeTerms.message}</p>
        )}

        {/* CONFIRM PASSWORD*/}
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
