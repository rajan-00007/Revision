"use client";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import {
  BackButton,
  CancelButton,
  CreateButton,
  DialogHeaderBar,
  DialogScrollContent,
  Error,
  Field,
  FormCard,
  H1,
  H2,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
  Label,
  Label2,
  Page,
  Row,
  StyledDialogContent,
  StyledInput,
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectTrigger,
  StyledSelectValue,
} from "../add-new-building/Styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledCheckbox } from "../day-3/register/styled";
import {
  ActionButton,
  CheckboxContainer,
  HelperText,
  MainText,
  TextContent,
  VacantSpace,
} from "./Service.Styled";
import { MdDelete } from "react-icons/md";
import { serviceFormSchema, ServiceFormData } from "./Service.Schema";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ServiceFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      parentHospital: "",
      branchUnit: "",
      serviceName: "",
      serviceCode: "",
      serviceCategory: "",
      serviceType: "",
      executedByThirdParty: false,
      thirdPartyVendor: "",

      performingDepartment: "",
      primaryServiceProvider: "",
      basePrice: "",
      totalTaxRate: "",
      cgst: "",
      sgst: "",
      steps: [{ stepType: "", stepName: "", counterNo: undefined as unknown as number }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (data: ServiceFormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <Page>
      <H1>Building</H1>
      <H2>Add new Service</H2>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-70">Add new Service</Button>
        </DialogTrigger>

        <StyledDialogContent>
          <DialogHeaderBar>
            <HeaderLeft>
              <DialogClose asChild>
                <BackButton type="button">
                  <FaArrowLeft />
                </BackButton>
              </DialogClose>
              <HeaderTitle>Add New Service</HeaderTitle>
            </HeaderLeft>
            <HeaderRight>
              <CreateButton
                onClick={handleSubmit(onSubmit)}
                className="flex items-center justify-center gap-2"
              >
                <IoMdAdd />
                Create Service
              </CreateButton>
            </HeaderRight>
          </DialogHeaderBar>

          <DialogScrollContent>
            <FormCard>
              <div>
                <Label2>
                  Select the Facility where service will be created
                </Label2>

                <Row gap="2vw">
                  <Field width="25%">
                    <Label>Select Parental Hospital</Label>

                    <StyledInput
                      placeholder="Select Parent Hospital"
                      {...register("parentHospital", {
                        required: "Parent Hospital is required",
                      })}
                    />
                    <Error>{errors.parentHospital?.message}</Error>
                  </Field>

                  <Field width="25%">
                    <Label>Select Branch Unit</Label>

                    <StyledInput
                      placeholder="Enter Service Code"
                      {...register("branchUnit", {
                        required: "Branch Unit is required",
                      })}
                    />
                    <Error>{errors.branchUnit?.message}</Error>
                  </Field>
                </Row>
              </div>

              <div>
                <Label2>Basic Details of Service</Label2>

                <Row>
                  <Field width="60%">
                    <Label>Service Name</Label>

                    <StyledInput
                      placeholder="Enter Service Name"
                      {...register("serviceName", {
                        required: "Service is required",
                      })}
                    />
                    <Error>{errors.serviceName?.message}</Error>
                  </Field>

                  <Field width="30%">
                    <Label>Service Code</Label>

                    <StyledInput
                      placeholder="Enter Service Name"
                      {...register("serviceCode", {
                        required: "Service code is required",
                      })}
                    />
                    <Error>{errors.serviceCode?.message}</Error>
                  </Field>
                </Row>

                <Row>
                  <Field width="21%">
                    <Label>Service Category</Label>

                    <StyledInput
                      placeholder="Select Service Category"
                      {...register("serviceCategory", {
                        required: "Service category is required",
                      })}
                    />
                    <Error>{errors.serviceCategory?.message}</Error>
                  </Field>

                  <Field width="15%">
                    <Label>Service Type</Label>

                    <StyledInput
                      placeholder="Select Service Type"
                      {...register("serviceType", {
                        required: "Service type is required",
                      })}
                    />
                    <Error>{errors.serviceType?.message}</Error>
                  </Field>

                  <Field width="22%">
                    <VacantSpace />

                    <CheckboxContainer>
                      <Controller
                        name="executedByThirdParty"
                        control={control}
                        render={({ field }) => (
                          <StyledCheckbox
                            id="vendor-check"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                      <TextContent htmlFor="vendor-check">
                        <MainText>
                          Service Executed By 3rd Party Vendor
                        </MainText>
                        <HelperText>
                          Check this to true, if this is processed by a 3rd
                          Party
                        </HelperText>
                      </TextContent>
                    </CheckboxContainer>
                  </Field>

                  <Field width="30%">
                    <Label>Select 3rd Party Vendor</Label>
                    <Controller
                      name="thirdPartyVendor"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select 3rd Party Service Provider Name" />
                          </StyledSelectTrigger>
                          <StyledSelectContent>
                            <StyledSelectItem value="vendor1">
                              Party 1
                            </StyledSelectItem>
                            <StyledSelectItem value="vendor2">
                              Party 2
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                    <Error>{errors.thirdPartyVendor?.message}</Error>
                  </Field>
                </Row>
              </div>

              <div>
                <Label2>Select Provider Details</Label2>

                <Row>
                  <Field width="21%">
                    <Label>Select Performing Department</Label>
                    <Controller
                      name="performingDepartment"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select Performing Department" />
                          </StyledSelectTrigger>
                          <StyledSelectContent>
                            <StyledSelectItem value="dept1">
                              Department 1
                            </StyledSelectItem>
                            <StyledSelectItem value="dept2">
                              Department 2
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                    <Error>{errors.performingDepartment?.message}</Error>
                  </Field>

                  <Field width="28%">
                    <Label>Primary Service Provider Name</Label>
                    <Controller
                      name="primaryServiceProvider"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select Primary Service Provider Name" />
                          </StyledSelectTrigger>
                          <StyledSelectContent>
                            <StyledSelectItem value="provider1">
                              Provider 1
                            </StyledSelectItem>
                            <StyledSelectItem value="provider2">
                              Provider 2
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                    <Error>{errors.primaryServiceProvider?.message}</Error>
                  </Field>
                </Row>
              </div>

              <div>
                <Label2>Service Pricing Details</Label2>
                <Row gap="4vw">
                  <Field width="20%">
                    <Label>Base Price of the Service</Label>
                    <StyledInput
                      placeholder="Enter Base Price of the Service"
                      {...register("basePrice")}
                    />
                    <Error>{errors.basePrice?.message}</Error>
                  </Field>

                  <Field width="20%">
                    <Label>Total Tax Rate</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter Total Tax Rate"
                      {...register("totalTaxRate")}
                    />
                    <Error>{errors.totalTaxRate?.message}</Error>
                  </Field>

                  <Field width="20%">
                    <Label>CGST</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter CGST Tax Rate"
                      {...register("cgst")}
                    />
                    <Error>{errors.cgst?.message}</Error>
                  </Field>

                  <Field width="20%">
                    <Label>SGST</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter SGST Tax Rate"
                      {...register("sgst")}
                    />
                    <Error>{errors.sgst?.message}</Error>
                  </Field>
                </Row>
              </div>

              <div>
                <Label2>Service Processing Step Details</Label2>

                {fields.map((item, index) => {
                  const isLastRow = index === fields.length - 1;

                  return (
                    <Row key={item.id}>
                      <Field width="9%">
                        <Label>Service Step Type</Label>
                        <Controller
                          name={`steps.${index}.stepType`}
                          control={control}
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <StyledSelectTrigger>
                                <StyledSelectValue placeholder="Select Type" />
                              </StyledSelectTrigger>
                              <StyledSelectContent>
                                <StyledSelectItem value="type1">
                                  Type 1
                                </StyledSelectItem>
                                <StyledSelectItem value="type2">
                                  Type 2
                                </StyledSelectItem>
                              </StyledSelectContent>
                            </Select>
                          )}
                        />
                        <Error>
                          {errors.steps?.[index]?.stepType?.message}
                        </Error>
                      </Field>

                      <Field width="19%">
                        <Label>Step Name</Label>
                        <StyledInput
                          placeholder="Enter step name"
                          {...register(`steps.${index}.stepName`)}
                        />
                        <Error>
                          {errors.steps?.[index]?.stepName?.message}
                        </Error>
                      </Field>

                      <Field width="10%">
                        <Label>Counter No</Label>
                        <StyledInput
                          type="number"
                          placeholder="Counter No"
                          {...register(`steps.${index}.counterNo`, {
                            valueAsNumber: true,
                          })}
                        />
                        <Error>
                          {errors.steps?.[index]?.counterNo?.message}
                        </Error>
                      </Field>

                      <Field width="15%">
                        <Label>Select Delivery Person</Label>
                        <StyledInput
                          placeholder="Enter delivery person"
                          {...register(`steps.${index}.deliveryPerson`)}
                        />
                      </Field>

                      <Field width="15%">
                        <Label>Performing Department</Label>
                        <StyledInput
                          placeholder="Enter department"
                          {...register(`steps.${index}.performingDepartment`)}
                        />
                      </Field>

                      <Field width="18%">
                        <Label>Care Team (Optional)</Label>
                        <StyledInput
                          placeholder="Enter care team"
                          {...register(`steps.${index}.careTeam`)}
                        />
                      </Field>

                      <Field width="5%">

                       <VacantSpace />
                        {isLastRow ? (
                          <ActionButton
                            type="button"
                            onClick={() =>
                              append({
                                stepType: "",
                                stepName: "",
                                counterNo: undefined as unknown as number,
                              })
                            }
                          >
                            + Add
                          </ActionButton>
                        ) : (
                          <ActionButton
                            type="button"
                            onClick={() => remove(index)}
                          >
                            <MdDelete />
                          </ActionButton>
                        )}
                      </Field>
                    </Row>
                  );
                })}
              </div>
            </FormCard>
          </DialogScrollContent>
        </StyledDialogContent>
      </Dialog>
    </Page>
  );
};

export default Form;
