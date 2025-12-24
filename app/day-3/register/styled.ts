import styled from "styled-components";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

/* Breakpoints */
const breakpoints = {
  mobile: "768px",
};

/* Page */
export const Page = styled.div`
  min-height: 100vh;
  
  background: #f3f4f6;
  padding: 50px 80px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

/* Form container */
export const FormCard = styled.form`
  max-width: 1400px;
  margin: auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 14px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

/* Row using FLEX */
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 28px;

   @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`;

/* Field wrapper */
export const Field = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  flex: 0 0 ${(p) => p.width};

  /* Mobile*/
  @media (max-width: ${breakpoints.mobile}) {
    flex: 0 0 100%;
  }

`;

/* Label */
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;

/* Reserve error space*/
export const Error = styled.span`
  min-height: 18px;
  font-size: 12px;
  color: red;
  margin-top: 4px;
`;

/* Input */
export const StyledInput = styled(Input)`
  height: 44px;
`;

/* Select Trigger */
export const StyledSelectTrigger = styled(SelectTrigger)`
  height: 44px;
  border-radius: 8px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #0070f3;
  }
`;

/* Select Value (text inside trigger) */
export const StyledSelectValue = styled(SelectValue)`
  font-size: 14px;
`;

/* Dropdown Content */
export const StyledSelectContent = styled(SelectContent)`
  border-radius: 10px;
`;

/* Dropdown Item */
export const StyledSelectItem = styled(SelectItem)`
  font-size: 14px;

  &[data-state="checked"] {
    background-color: #0070f3;
    color: white;
  }
`;

/* Styled Checkbox */
export const StyledCheckbox = styled(Checkbox)`
  margin-right: 8px;

  &[data-state="checked"] {
    background-color: #0070f3;
    border-color: #0070f3;
  }
`;


/* Styled Switch */
export const StyledSwitch = styled(Switch)`
  margin-top: 8px;

  &[data-state="checked"] {
    background-color: #0070f3;
  }
`;



/* Submit */
export const SubmitButton = styled(Button)`
  margin-top: 40px;
  padding: 16px;
  font-size: 16px;
  background-color: #0070f3;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

