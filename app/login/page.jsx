"use client"

import { useState } from "react"
import {
  Wrapper,
  Card,
  Title,
  Field,
  Label,
  Input,
  Button,
  Error,
} from "./style"

export default function LoginPage() {
  const [error, setError] = useState(false)

  return (
    <Wrapper>
      <Card>
        <Title>Login</Title>

        <Field>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="you@example.com"
            error={error}
          />
        </Field>

        <Field>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            error={error}
          />
        </Field>

        {error && <Error>Invalid email or password</Error>}

        <Button onClick={() => setError(true)}>
          Sign In
        </Button>
      </Card>
    </Wrapper>
  )
}
