"use client";

import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { FaArrowLeft } from "react-icons/fa6";

import {
  Page,
  H1,
  H2,
  Row,
  Field,
  Label,
  StyledInput,
  Error,
  FormCard,
  StyledDialogContent,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectContent,
  StyledSelectItem,
  FileUploadRow,
  HiddenFileInput,
  FileInputBox,
  ChooseFileBtn,
  FileName,
  ImagePreviewWrapper,
  PreviewImage,
  RemoveImageButton,
  StyledMultiSelect,
  DialogHeaderBar,
  DialogScrollContent,
  HeaderLeft,
  BackButton,
  HeaderTitle,
  HeaderRight,
  CancelButton,
  CreateButton,
  Label2,
  Row2,
  Col,
} from "./Styled";
import { DialogClose } from "@/components/ui/dialog";

import {
  buildingFormSchema,
  BuildingFormValues,
} from "./buildingSchema"
import { zodResolver } from "@hookform/resolvers/zod";

/* type FormValues = {
  buildingName: string;
  displayName: string;
  buildingId: string;
  parentCampus: string;
  image: FileList;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  latitude: string;
  longitude: string;
  locationMarkers: string;
  contactPerson: string;
  administrationDetails: string;
  email: string;
  contactNumber: string;
  linkedBranches: { value: string; label: string }[];
}; */

const PageForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BuildingFormValues>({
    resolver: zodResolver(buildingFormSchema),
    defaultValues: {
      buildingName: "",
      displayName: "",
      buildingId: "",
      parentCampus: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      latitude: "",
      longitude: "",
      locationMarkers: "",
      contactPerson: "",
      administrationDetails: "",
      email: "",
      contactNumber: "",
      linkedBranches: [],
      image: undefined,
    },
  });

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const buildingOptions = [
    { value: "block-a", label: "Block A" },
    { value: "block-b", label: "Block B" },
    { value: "block-c", label: "Block C" },
    { value: "block-d", label: "Block D" },
  ];

  const onSubmit = (data: BuildingFormValues) => {
    console.log("Dialog Form Data:", data);
  };

  const onError = (errors: any) => {
    console.log("Form Errors:", errors);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFileName("No file chosen");

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const imageRegister = register("image", {
    required: "Image is required",
    onChange: handleFileChange,
  });

  return (
    <Page>
      <H1>Building</H1>
      <H2>Add new Building</H2>


      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Building</Button>
        </DialogTrigger>

        <StyledDialogContent>
          {/* Header Bar*/}
          <DialogHeaderBar>
            <HeaderLeft>
              <BackButton type="button">
                <FaArrowLeft />
              </BackButton>
              <HeaderTitle>Add New Building</HeaderTitle>
            </HeaderLeft>
            <HeaderRight>
             
              <DialogClose asChild>
                <CancelButton type="button">Cancel</CancelButton>
              </DialogClose>
              <CreateButton type="submit" form="add-building-form">
                Create Building
              </CreateButton>
            </HeaderRight>
          </DialogHeaderBar>

          {/* Scrollable Content */}
          <DialogScrollContent>
            <FormCard id="add-building-form" onSubmit={handleSubmit(onSubmit, onError)}>
              <div>
                <Label2>Basic Details of Building</Label2>
                <Row gap="4vw">
                  <Field width="20%">
                    <Label>Building Name*</Label>
                    <StyledInput
                      placeholder="Enter Building name"
                      {...register("buildingName", { required: "Name is required" })}
                    />
                    <Error>{errors.buildingName?.message}</Error>
                  </Field>

                  <Field width="20%">
                    <Label>Display Name*</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter Alias Name"
                      {...register("displayName", { required: "Display Name is required" })}
                    />
                    <Error>{errors.displayName?.message}</Error>
                  </Field>

                  <Field width="20%">
                    <Label>Building ID*</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter Building ID"
                      {...register("buildingId", { required: "Building ID is required" })}
                    />
                    <Error>{errors.buildingId?.message}</Error>
                  </Field>
                  <Field width="20%">
                    <Label>Select Parent Campus</Label>
                    <Controller
                      name="parentCampus"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select Parent Campus" />
                          </StyledSelectTrigger>

                          <StyledSelectContent>
                            <StyledSelectItem value="user">
                              User
                            </StyledSelectItem>
                            <StyledSelectItem value="admin">
                              Admin
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                </Row>
              </div>

              <Row>
                <Field width="50%">
                  <Label>Upload Building Image</Label>

                  <FileUploadRow>
                    <FileInputBox>
                      <ChooseFileBtn
                        type="button"
                        onClick={() => fileRef.current?.click()}
                      >
                        Choose file
                      </ChooseFileBtn>

                      <FileName>{fileName}</FileName>
                    </FileInputBox>

                    <HiddenFileInput
                      type="file"
                      accept="image/*"
                      {...imageRegister}
                      ref={(e) => {
                        imageRegister.ref(e);
                        fileRef.current = e;
                      }}
                    />

                    {preview && (
                      <ImagePreviewWrapper>
                        <PreviewImage src={preview} alt="preview" />
                        <RemoveImageButton
                          type="button"
                          onClick={handleRemoveImage}
                        >
                          x
                        </RemoveImageButton>
                      </ImagePreviewWrapper>
                    )}
                  </FileUploadRow>
                  <p className="text-[12px] text-gray-700">
                    Uplaod Image of Building in PNG format in 144 x 144
                    Dimension
                  </p>

                  <Error>{errors.image?.message}</Error>
                </Field>
              </Row>

              <div>
                <Label2>Location Details</Label2>
                <Row>
                  <Field width="23%">
                    <Label>Address Line 1</Label>
                    <StyledInput
                      placeholder="Enter Address Line 1"
                      {...register("addressLine1", { required: "Address Line 1 is required" })}
                    />
                    <Error>{errors.addressLine1?.message}</Error>
                  </Field>

                  <Field width="23%">
                    <Label>Address Line 2</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter Address Line 2"
                      {...register("addressLine2", { required: "Address Line 2 is required" })}
                    />
                    <Error>{errors.addressLine2?.message}</Error>
                  </Field>

                  <Field width="18%">
                    <Label>City</Label>
                    <StyledInput
                      type="text"
                      placeholder="Enter City"
                      {...register("city", { required: "City is required" })}
                    />
                    <Error>{errors.city?.message}</Error>
                  </Field>
                  <Field width="14%">
                    <Label>State</Label>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select State" />
                          </StyledSelectTrigger>

                          <StyledSelectContent>
                            <StyledSelectItem value="UP">
                              Uttar Pradesh
                            </StyledSelectItem>
                            <StyledSelectItem value="MP">
                              Madhya Pradesh
                            </StyledSelectItem>
                            <StyledSelectItem value="Delhi">
                              Delhi
                            </StyledSelectItem>
                            <StyledSelectItem value="Bihar">
                              Bihar
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                  </Field>

                  <Field width="14%">
                    <Label>Country</Label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <StyledSelectTrigger>
                            <StyledSelectValue placeholder="Select Country" />
                          </StyledSelectTrigger>

                          <StyledSelectContent>
                            <StyledSelectItem value="India">
                              India
                            </StyledSelectItem>
                          </StyledSelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                </Row>

                <Row2 gap="55px">
                  <Field width="44%">
                    <Row>
                      <Field width="52%">
                        <Label>PIN Code*</Label>
                        <StyledInput
                          placeholder="Enter Pin Code"
                          {...register("pinCode", {
                            required: "PIN Code is required",
                          })}
                        />
                        <Error>{errors.pinCode?.message}</Error>
                      </Field>

                      <Field width="28%">
                        <Label>Latitude</Label>
                        <StyledInput
                          type="text"
                          placeholder="Enter Lattitude"
                          {...register("latitude", {
                            required: "Latitude is required",
                          })}
                        />
                        <Error>{errors.latitude?.message}</Error>
                      </Field>
                    </Row>
                  </Field>

                  <Field width="40%">
                    <Row>
                      {" "}
                      <Field width="45%">
                        <Label>Longitude</Label>
                        <StyledInput
                          type="text"
                          placeholder="Enter Longitude"
                          {...register("longitude", {
                            required: "Longitude is required",
                          })}
                        />
                        <Error>{errors.longitude?.message}</Error>
                      </Field>
                      <Field width="50%">
                        <Label>Location Markers</Label>
                        <StyledInput
                          type="text"
                          placeholder="Enter Location Markers"
                          {...register("locationMarkers", {
                            required: "Location Markers are required",
                          })}
                        />
                        <Error>{errors.locationMarkers?.message}</Error>
                      </Field>
                    </Row>
                  </Field>
                </Row2>
              </div>

              <div>
                <Label2>Administrator & Contact Details</Label2>

                <Col>
                  <Row gap="8%">
                      <Field width="40%">
                      <Label>Contact Person</Label>
                      <Controller
                        name="contactPerson"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <StyledSelectTrigger>
                              <StyledSelectValue placeholder="Select Primary Contact Person" />
                            </StyledSelectTrigger>

                            <StyledSelectContent>
                              <StyledSelectItem value="user">
                                User
                              </StyledSelectItem>
                              <StyledSelectItem value="admin">
                                Admin
                              </StyledSelectItem>
                            </StyledSelectContent>
                          </Select>
                        )}
                      />
                      <Error>{errors.contactPerson?.message}</Error>
                    </Field>

                    {/* <Field width="40%">
                      <Label>Email ID</Label>
                      <StyledInput
                        placeholder="Enter Email ID"
                        {...register("name", { required: "Name is required" })}
                      />
                      <Error>{errors.name?.message}</Error>
                    </Field> */}

                    <Field width="40%">
                      <Label>Administration Details*</Label>
                      <Controller
                        name="administrationDetails"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <StyledSelectTrigger>
                              <StyledSelectValue placeholder="Enter Adminstrator Details" />
                            </StyledSelectTrigger>

                            <StyledSelectContent>
                              <StyledSelectItem value="user">
                                User
                              </StyledSelectItem>
                              <StyledSelectItem value="admin">
                                Admin
                              </StyledSelectItem>
                            </StyledSelectContent>
                          </Select>
                        )}
                      />
                    </Field>
                  </Row>

                  <Row gap="8%">
                    <Field width="40%">
                      <Label>Email ID</Label>
                      <StyledInput
                        placeholder="Enter Email ID"
                        {...register("email", { required: "Email is required" })}
                      />
                      <Error>{errors.email?.message}</Error>
                    </Field>

                    <Field width="40%">
                      <Label>Contact Number of Building</Label>
                      <StyledInput
                        type="tel"
                        placeholder="Enter Contact Nuber of Campus"
                        {...register("contactNumber", {
                          required: "Contact Number is required",
                        })}
                      />
                      <Error>{errors.contactNumber?.message}</Error>
                    </Field>
                  </Row>
                </Col>
              </div>

              <div>
                <Label2>Linked Branches</Label2>
                <Row>
                  <Field width="100%">
                    <Label>Select Branches Located Inside Building</Label>
                    <Controller
                      name="linkedBranches"
                      control={control}
                      render={({ field }) => (
                        <StyledMultiSelect
                          {...field}
                          isMulti
                          options={buildingOptions}
                          placeholder="Select buildings"
                          menuPlacement="auto"
                        />
                      )}
                    />
                  </Field>
                </Row>
              </div>
            </FormCard>
          </DialogScrollContent>
        </StyledDialogContent>
      </Dialog>
    </Page>
  );
};

export default PageForm;
