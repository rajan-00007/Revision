"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { studentSchema, StudentFormType } from "./schema";
import {
  ActionButton,
  Error,
  Field,
  FormCard,
  H1,
  H2,
  Label,
  Page,
  Row,
  StyledInput,
  SubmitButton,
} from "./styled";

const StudentForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormType>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      students: [{ name: "", email: "", age: 18, course: "", mobile: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });

  const onSubmit = (data: StudentFormType) => {
    console.log("Submitted Data: ", data);
  };

  return (
    <Page>
      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <H1>Student Registration</H1>

        {fields.map((field, index) => (
          <div key={field.id}>
            <H2>Student {index + 1}</H2>

            <Row>

              <Field width="20%">
                <Label>Name</Label>
                <StyledInput {...register(`students.${index}.name`)} />
                <Error>{errors
                .students?.[index]?.name?.message}</Error>
              </Field>

              <Field width="20%">
                <Label>Email</Label>
                <StyledInput {...register(`students.${index}.email`)} />
                <Error>{errors.students?.[index]?.email?.message}</Error>
              </Field>

              <Field width="8%">
                <Label>Age</Label>
                <StyledInput
                  {...register(`students.${index}.age`, {
                    valueAsNumber: true,
                  })}
                />
                <Error>{errors.students?.[index]?.age?.message}</Error>
              </Field>

              <Field width="20%">
                <Label>Course</Label>
                <StyledInput {...register(`students.${index}.course`)} />
                <Error>{errors.students?.[index]?.course?.message}</Error>
              </Field>

              <Field width="15%">
                <Label>Mobile</Label>
                <StyledInput {...register(`students.${index}.mobile`)} />
                <Error>{errors.students?.[index]?.mobile?.message}</Error>
              </Field>

              <Field width="5%">
                <ActionButton
                  $type="delete"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Delete
                </ActionButton>
              </Field>
            </Row>
          </div>
        ))}

        <Row>
          <ActionButton
            $type="add"
            onClick={() =>
              append({
                name: "",
                email: "",
                age: 18,
                course: "",
                mobile: "",
              })
            }
          >
            Add
          </ActionButton>

          <ActionButton
            $type="reset"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </ActionButton>
        </Row>

        <SubmitButton type="submit">Submit Registration</SubmitButton>
      </FormCard>
    </Page>
  );
};

export default StudentForm;
