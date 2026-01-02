import styled from "styled-components";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  background: white; 
  display: flex;
  flex-direction: column;
`;


export const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: blue;
  margin: 0;
  margin:18px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

/* Error */
export const Error = styled.span`
  min-height: 18px;
  
  font-size: 14px;
  color: #dc2626;
  margin-top: 1px;
  margin-bottom:10px;
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

export const RemoveButton = styled.button`
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

export const Row = styled.div<{ gap?: string }>`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  gap: ${(p) => p.gap || "12px"};
  align-items: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`;

export const Field = styled.div<{ width?: string }>`

  flex: 0 0 ${(p) => p.width};
  width: ${(p) => p.width};

 

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

/* export const Label2 = styled.label`
  font-size: 16px;
  font-weight: 500;
 // border:1px solid red;
  
`; */

/* Input */
export const StyledInput = styled(Input)`
  height: 44px;
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


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

export const StatsBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: #f9fafb;
`;

export const TaskText = styled.span<{ completed?: boolean }>`
  flex: 1;
  text-decoration: ${(p) => (p.completed ? "line-through" : "none")};
  color: ${(p) => (p.completed ? "gray" : "black")};
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background: white;
  cursor: pointer;
  
  &:hover {
    background: #f3f4f6;
  }
`;

/* export const AddButton = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;
 */