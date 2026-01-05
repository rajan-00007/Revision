"use client";

import { useForm, Controller,useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormValues } from "./schema";

import {
  Page,
  FormCard,
  Row,
  Field,
  Label,
  StyledInput,
  StyledCheckbox,
  StyledSwitch,
  Error,
  SubmitButton,
} from "./styled";

import {
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectContent,
  StyledSelectItem,
} from "./styled";
import { Select } from "@/components/ui/select";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      notifications: true,
    },
  });

  return (
    <Page>
      <FormCard onSubmit={handleSubmit(console.log)}>
        {/* ROW 1 → 3 fields */}
        <Row>
          <Field width="31%">
            <Label>First Name</Label>
            <StyledInput {...register("firstName")} />
            <Error>{errors.firstName?.message}</Error>
          </Field>

          <Field width="31%">
            <Label>Last Name</Label>
            <StyledInput {...register("lastName")} />
            <Error>{errors.lastName?.message}</Error>
          </Field>

          <Field width="31.33%">
            <Label>Email</Label>
            <StyledInput {...register("email")} />
            <Error>{errors.email?.message}</Error>
          </Field>
        </Row>

        {/* ROW 2 → offset feel (2 fields) */}
        <Row>
          <Field width="48%">
            <Label>Phone</Label>
            <StyledInput {...register("phone")} />
            <Error>{errors.phone?.message}</Error>
          </Field>

          <Field width="48%">
            <Label>Company</Label>
            <StyledInput {...register("company")} />
            <Error />
          </Field>
        </Row>

        {/* ROW 3 → 4 compact fields */}
        <Row>
          <Field width="31%">
            <Label>City</Label>
            <StyledInput {...register("city")} />
            <Error>{errors.city?.message}</Error>
          </Field>

          <Field width="31%">
            <Label>State</Label>
            <StyledInput {...register("state")} />
            <Error>{errors.state?.message}</Error>
          </Field>

          <Field width="31%">
            <Label>ZIP</Label>
            <StyledInput {...register("zip")} />
            <Error>{errors.zip?.message}</Error>
          </Field>

          <Field width="98%">
            <Label>Designation / Work Details</Label>
            <StyledInput {...register("designation")} />
            <Error>{errors.designation?.message}</Error>
          </Field>
        </Row>

        {/* ROW 4 → single wide field */}
        <Row>
          <Field width="50%">
            <Label>Role</Label>

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <StyledSelectTrigger>
                    <StyledSelectValue placeholder="Select role" />
                  </StyledSelectTrigger>

                  <StyledSelectContent>
                    <StyledSelectItem value="user">User</StyledSelectItem>
                    <StyledSelectItem value="admin">Admin</StyledSelectItem>
                  </StyledSelectContent>
                </Select>
              )}
            />

            <Error>{errors.role?.message}</Error>
          </Field>
        </Row>

        {/* ROW 5 → mixed */}
        <Row>
          <Field width="48%">
            <Label>Username</Label>
            <StyledInput {...register("username")} />
            <Error>{errors.username?.message}</Error>
          </Field>

          <Field width="48%">
            <Label>Password</Label>
            <StyledInput type="password" {...register("password")} />
            <Error>{errors.password?.message}</Error>
          </Field>
        </Row>

        {/* ROW 6 → single */}
        <Row>
          <Field width="48%">
            <Label>Confirm Password</Label>
            <StyledInput type="password" {...register("confirmPassword")} />
            <Error>{errors.confirmPassword?.message}</Error>
          </Field>
        </Row>

        {/* ROW 7 → controls */}
        <Row>
          <Field width="48%">
            <Label>
              <StyledCheckbox {...register("terms")} /> Accept Terms
            </Label>
            <Error>{errors.terms?.message}</Error>
          </Field>

          <Field width="50%">
            <Label>Notifications</Label>
            <Controller
              name="notifications"
              control={control}
              render={({ field }) => (
                <StyledSwitch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Error />
          </Field>
        </Row>

        <SubmitButton type="submit">Create Account</SubmitButton>
      </FormCard>
    </Page>
  );
}
