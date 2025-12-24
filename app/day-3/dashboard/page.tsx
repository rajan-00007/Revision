"use client";

import {
  Page,
  Header,
  StatsGrid,
  StatCard,
  TableScroll,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  Badge,
  MenuTrigger,
  MenuContent,
  MenuItem,
  StyledTabsList,
  StyledTabsTrigger,
  StyledTabsContent,
  StyledTooltipTrigger,
  StyledTooltipContent,
} from "./styled";

import { Tabs } from "@/components/ui/tabs";
import { Tooltip } from "@/components/ui/tooltip";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";


/* Dummy data */
const users = [
  { name: "User 1", role: "Admin", status: "active" },
  { name: "User 2", role: "User", status: "inactive" },
  { name: "User 3", role: "User", status: "active" },
  { name: "User 4", role: "User", status: "inactive" },
  { name: "User 5", role: "User", status: "inactive" },
  { name: "User 6", role: "Admin", status: "inactive" },
  { name: "User 7", role: "Admin", status: "active" },
  { name: "User 8", role: "User", status: "inactive" },
  { name: "User 9", role: "User", status: "active" },
];

export default function DashboardPage() {
  return (
    <Page>
      <Header>Dashboard</Header>

      {/* STATS */}
      <StatsGrid>
        <Tooltip>
          <StyledTooltipTrigger asChild>
            <StatCard>
              <h3>Total Users</h3>
              <p>120</p>
            </StatCard>
          </StyledTooltipTrigger>
          <StyledTooltipContent>
            Total registered users
          </StyledTooltipContent>
        </Tooltip>

        <Tooltip>
          <StyledTooltipTrigger asChild>
            <StatCard>
              <h3>Active Users</h3>
              <p>85</p>
            </StatCard>
          </StyledTooltipTrigger>
          <StyledTooltipContent>
            Currently active users
          </StyledTooltipContent>
        </Tooltip>

        <Tooltip>
          <StyledTooltipTrigger asChild>
            <StatCard>
              <h3>Pending Tasks</h3>
              <p>24</p>
            </StatCard>
          </StyledTooltipTrigger>
          <StyledTooltipContent>
            Tasks waiting for action
          </StyledTooltipContent>
        </Tooltip>
      </StatsGrid>

      {/* TABS */}
      <Tabs defaultValue="users">
        <StyledTabsList>
          <StyledTabsTrigger value="users">
            Users
          </StyledTabsTrigger>
          <StyledTabsTrigger value="tasks">
            Tasks
          </StyledTabsTrigger>
        </StyledTabsList>

        {/* USERS TAB */}
        <StyledTabsContent value="users">
          <TableScroll>
            <StyledTable>
              <thead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Action</TableHeader>
                </TableRow>
              </thead>

              <tbody>
                {users.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge status={user.status}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <MenuTrigger><IoMenu/></MenuTrigger>
                        <MenuContent>
                          <MenuItem>Edit</MenuItem>
                          <MenuItem>Deactivate</MenuItem>
                        </MenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </StyledTable>
          </TableScroll>
        </StyledTabsContent>

        {/* TASKS TAB */}
        <StyledTabsContent value="tasks">
          <p style={{ marginTop: 20 }}>
            No tasks available.
          </p>
        </StyledTabsContent>
      </Tabs>
    </Page>
  );
}
