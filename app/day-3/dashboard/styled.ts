"use client";
import styled from "styled-components";

import { Button } from "@/components/ui/button";
import { Badge as BaseBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import {
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

/* PAGE */
export const Page = styled.div`
  min-height: 100vh;
  padding: 50px;
  background: var(--color-page-bg);
`;

/* HEADER */
export const Header = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
`;

/* STATS */
export const StatsGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const StatCard = styled(Card)`
  padding: 20px;
  border-radius: 12px;
  cursor: default;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

/* TOOLTIP */
export const StyledTooltipTrigger = styled(TooltipTrigger)``;

export const StyledTooltipContent = styled(TooltipContent)`
  font-size: 12px;
`;

/* TABS */
export const StyledTabsList = styled(TabsList)`
  margin-bottom: 10px;
`;

export const StyledTabsTrigger = styled(TabsTrigger)`
  padding: 10px 16px;
`;

export const StyledTabsContent = styled(TabsContent)`
  margin-top: 12px;
`;

/* TABLE */
export const TableScroll = styled(ScrollArea)`
  height: 400px;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-table-bg);
  border-radius: 12px;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px 16px;
  background: var(--color-table-header-bg);
  font-weight: 600;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: var(--color-table-row-even-bg);
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
`;

/* BADGE */
export const Badge = styled(BaseBadge)<{ status: string }>`
  background-color: ${(p) =>
    p.status === "active"
      ? "var(--color-badge-active)"
      : "var(--color-badge-inactive)"};
  color: #fff;
`;

/* DROPDOWN */
export const MenuTrigger = styled(DropdownMenuTrigger)`
  cursor: pointer;
`;

export const MenuContent = styled(DropdownMenuContent)`
  min-width: 140px;
`;

export const MenuItem = styled(DropdownMenuItem)`
  cursor: pointer;
`;
