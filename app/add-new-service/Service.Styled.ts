import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import styled from "styled-components";

export const ActionButton = styled(Button)`
  font-size: 14px;
  font-weight:700;
  color: #372100;
  border: 1px solid #372100;

  background-color:white ;

`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 8px;
`;

export const TextContent = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer; 
`;

export const MainText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.0;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 0px; 
  font-weight: 400;
`;

export const StyledCheckbox = styled(Checkbox)`
  &[data-state="checked"] {
    background-color: #0070f3;
    border-color: #0070f3;
  }
`;

export const VacantSpace = styled.span`
  height:22px
`;