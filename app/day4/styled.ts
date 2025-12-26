import styled from "styled-components";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/* Breakpoints */
const breakpoints = {
  mobile: "768px",
};

/* Page */
export const Page = styled.div`
  min-height: 100vh;
  width:100vw
  
  background: #f3f4f6;
  padding: 20px 30px;
  

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 26px;
  font-weight: 600;  
`;

export const H2 = styled.h1`
  font-size: 16px;
  font-weight: 600;  
  color: #15803d;
`;


/* Form container */
export const FormCard = styled.form`
  width: 100%;
  margin: auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 14px;
  display:flex;
  flex-direction:column;
  gap:8px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

/* Row using FLEX */
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items:center;

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

/* error space*/
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

/* Submit */
export const SubmitButton = styled(Button)`
  margin-top: 40px;
  padding: 16px;
  width:18%;
  font-size: 16px;
  background-color: #0070f3;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

type ActionBtnType = "add" | "delete" | "reset";

export const ActionButton = styled(Button)<{ $type: ActionBtnType }>`
  padding: 12px 20px;
  font-size: 14px;
  color: white;

  background-color: ${({ $type }) =>
    $type === "add"
      ? "#16a34a"
      : $type === "delete"
      ? "#dc2626"
      : "#6b7280"};

`;
