"use client";

import { useState } from "react";
import useTaskStore, { Day } from "@/store/taskStore";
import {
  Error,
  Field,
  HeaderTitle,
  Page,
  Row,
  StyledInput,
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectTrigger,
  StyledSelectValue,
  Wrapper,
  StatsBox,
  TaskList,
  TaskItem,
  TaskText,
  ButtonGroup,
  ActionButton,
  CreateButton,
} from "./taskStyled";
import { Controller, useForm } from "react-hook-form";
import { TaskFormValues, taskSchema } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@/components/ui/select";
import { FormCard } from "@/app/add-new-building/Styled";

const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function TaskTracker() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      day: undefined,
    },
  });

  const { tasks, addTask, toggleTask, removeTask, totalTasks, completedTasks } =
    useTaskStore();

  const onSubmit = (data: TaskFormValues) => {
    console.log("Form Data:", data);
     if (!data.day) return;
    addTask(data.taskName, data.day);
    reset();
  };

  return (
    <>
      <Page>
        <Wrapper>
          <HeaderTitle>Weekly Task Tracker</HeaderTitle>

          <FormCard onSubmit={handleSubmit(onSubmit)}>
            <Field width="">
              <StyledInput
                placeholder="Enter Task Name"
                {...register("taskName", { required: "task name is required" })}
              />
              <Error>{errors.taskName?.message}</Error>
            </Field>

            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <StyledSelectTrigger>
                    <StyledSelectValue placeholder="Select Day" />
                  </StyledSelectTrigger>

                  <StyledSelectContent>
                    {days.map((d) => (
                      <StyledSelectItem key={d} value={d}>
                        {d}
                      </StyledSelectItem>
                    ))}
                  </StyledSelectContent>
                </Select>
              )}
            />

            <Error>{errors.day?.message}</Error>

            <CreateButton
             type="submit"
            >
              Add Task
            </CreateButton>
          </FormCard>

          <StatsBox>
            <strong>Total Tasks: {totalTasks()}</strong>
            <strong>Completed Tasks: {completedTasks()}</strong>
          </StatsBox>

          <TaskList>
            {tasks.map((task) => (
              <TaskItem key={task.id}>
                <TaskText completed={task.completed}>
                  {task.title} ({task.tillDay})
                </TaskText>

                <ButtonGroup>
                  <ActionButton onClick={() => toggleTask(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                  </ActionButton>

                  <ActionButton onClick={() => removeTask(task.id)}>
                    Remove
                  </ActionButton>
                </ButtonGroup>
              </TaskItem>
            ))}
          </TaskList>
        </Wrapper>
      </Page>
    </>
  );
}
