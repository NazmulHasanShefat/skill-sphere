"use client";
import SocialSignIn from "@/components/UI/SocialSignIn";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Switch,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const LoginPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await authClient.signIn.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    if (error) {
      console.log(`register successfull`, error);
    }
    if (data) {
      console.log(`register successfull`, data);
      window.location.assign("/");
    }
  };

  return (
    <section className="w-full max-w-7xl flex justify-center mx-auto px-5 h-screen">
      <div className="loginForm w-max px-5 flex flex-col h-max items-center border border-blue-500 py-5 rounded-xl">
        <h1 className="text-2xl md:text-5xl font-bold">Login Now</h1>
        <Form
          className="flex w-full flex-col gap-4 mt-10"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={isSelected ? "text" : "password"}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
            <div className="show_passwordcontainer">
              <Switch isSelected={isSelected} onChange={setIsSelected}>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Content>
                  <Label className="text-sm">
                    {" "}
                    {isSelected ? "hide password" : "Show password"}{" "}
                  </Label>
                </Switch.Content>
              </Switch>
            </div>
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <SocialSignIn />
      </div>
    </section>
  );
};

export default LoginPage;
