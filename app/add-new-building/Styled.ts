import styled from "styled-components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Select from "react-select";

import {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

/* Breakpoints */
const breakpoints = {
  mobile: "768px",
};

/* Page - Full Page Container */
export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f3f4f6;
  
 
  display: flex;
  flex-direction: column;
`;

/* Page Header Bar */
export const PageHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 16px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #374151;
  padding: 4px;

  &:hover {
    color: #111827;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #111827;
  }
`;

export const CreateButton = styled.button`
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #2563eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

/* Page Content Area */
export const PageContent = styled.div`
  flex: 1;
  padding: 24px 30px;
  overflow-y: auto;
  background: white;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`;

/* Headings */
export const H1 = styled.h1`
  font-size: 26px;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #15803d;
`;

/* Form container */
export const FormCard = styled.form`
  width: 100%;
  background: #ffffff;
  padding: 0px 0px 10px 0px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 0;
  }
`;

/* Row*/
export const Row = styled.div<{ gap?: string }>`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  gap: ${(p) => p.gap || "12px"};
  align-items: flex-start;
  margin-top:1px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

export const Row2 = styled.div<{ gap?: string }>`
  display: flex;

  flex-wrap: wrap;
  /* border: 1px solid black; */
  gap: ${(p) => p.gap || "12px"};
  align-items: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

export const Col = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.gap || ""};
`;

/* Field — CORE FIX */
export const Field = styled.div<{ width?: string }>`

  flex: 0 0 ${(p) => p.width || "23%"};
  max-width: ${(p) => p.width || "23%"};
  min-width: 0;

  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

/* Label */
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const Label2 = styled.label`
  font-size: 18px;
  font-weight: 500;
 // border:1px solid red;
  
`;

/* Error */
export const Error = styled.span`
  min-height: 20px;
  
  font-size: 13px;
  color: #dc2626;
  margin-top: 1px;
  margin-bottom:2px;
`;

/* Input */
export const StyledInput = styled(Input)`
  height: 38px;
  width: 100%;

   &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px #3b82f6; /* Tailwind blue-500 */
    border-color: #3b82f6;
  }
`;

/* Submit */
export const SubmitButton = styled(Button)`
  padding: 16px;
  width: 18%;
  font-size: 16px;
  background-color: #0070f3;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

/* Dialog */
export const StyledDialogContent = styled(DialogContent)`
  min-width: 100vw;
  max-height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  /* Hide the X button */
   & > button:last-child {
    display: none ;
  }
 
  @media (max-width: ${breakpoints.mobile}) {
    max-height: 100vh;
    border-radius: 0;
    padding: 0;
  }
`;

/* Dialog Header Bar - Fixed at top of dialog */
export const DialogHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  // border-bottom: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px 16px;
  }
`;

/* Scrollable Content Wrapper for Dialog */
export const DialogScrollContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0px 32px;
  background: white;
 
  @media (max-width: ${breakpoints.mobile}) {
    padding:0px 16px 25px 16px;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  font-size: 22px;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const StyledDialogFooter = styled(DialogFooter)`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const StyledSelectTrigger = styled(SelectTrigger)`
  height: 38px;
  width: 100%;
  min-width: 0;
  border-radius: 8px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #0070f3;
  }
`;

export const StyledSelectValue = styled(SelectValue)`
  font-size: 14px;
`;

export const StyledSelectContent = styled(SelectContent)`
  border-radius: 10px;
`;

export const StyledSelectItem = styled(SelectItem)`
  font-size: 14px;

  &[data-state="checked"] {
    background-color: #0070f3;
    color: white;
  }
`;


/* File Upload Wrapper */
export const FileUploadRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

/*  file input  */
export const FileInputBox = styled.div`
  height: 38px;
  width: 500px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fff;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

/* Choose file button */
export const ChooseFileBtn = styled(Button)`
  height: 100%;
  padding: 0 14px;
  border: none;
  border-radius: 0px;
  background: black;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

/* File name text */
export const FileName = styled.span`
  padding: 0 12px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Preview wrapper */
export const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
`;

/* Preview image */
export const PreviewImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 2px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
`;

/* Remove button */
export const RemoveImageButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: #dc2626;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    background: #b91c1c;
  }
`;

export const StyledMultiSelect = styled(Select).attrs({
  classNamePrefix: "rs",
})`
  width: 40%;
  margin-top:2px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  /* Control */
  .rs__control {
    min-height: 38px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background-color: #f8fafc;
    box-shadow: none;
    cursor: pointer;
  }

  /* Value container */
  .rs_value-container {
    padding: 6px 10px;
    gap: 6px;
  }

  /* Placeholder */
  .rs__placeholder {
    color: #64748b;
    font-size: 15px;
  }

  .react-select__multi-value {
    background-color: #eff6ff;
    border-radius: 6px;
  }

  .react-select__multi-value__label {
    color: #1e3a8a;
    font-size: 14px;
  }

  .react-select__multi-value__remove {
    color: #1e3a8a;
    cursor: pointer;
  }

  .react-select__multi-value__remove:hover {
    background-color: #bfdbfe;
    color: #1e40af;
  }

  .react-select__menu {
    border-radius: 8px;
    overflow: hidden;
  }

  .react-select__option {
    font-size: 14px;
    cursor: pointer;
  }

  .react-select__option--is-focused {
    background-color: #eff6ff;
  }

  .react-select__option--is-selected {
    background-color: #2563eb;
    color: white;
  }


`;