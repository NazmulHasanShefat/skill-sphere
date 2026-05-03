"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Switch } from "@heroui/react";
import { use, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import SocialSignIn from "@/components/UI/SocialSignIn";

const UpdateUser = ({ searchParams }) => {
  const myParams = use(searchParams);
  const name = myParams.name;
  const image = myParams.image;
  const [currentFormData, setformdata] = useState({
    name: myParams.name,
    image: myParams.image,
  });

  console.log(name);
  console.log(image);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const { data, error } = await authClient.updateUser({
      name: userData.name,
      image: userData.imageUrl,
    });
    if (error) {
      console.log(`register successfull`, error);
    }
    if (data) {
      console.log(`register successfull`, data);
      window.location.assign("/login");
    }
  };

  const handleFormData = (property, value) => {
    setformdata((prevOBJ) => ({
      ...prevOBJ,
      [property]: value,
    }));
  };

  return (
    <section className="w-full max-w-7xl flex justify-center mx-auto px-5 h-screen">
      <div className="loginForm w-max px-5 flex flex-col h-max items-center border border-blue-500 py-5 rounded-xl">
        <h1 className="text-2xl md:text-5xl font-bold">Update you profile</h1>
        <Form
          className="flex w-full flex-col gap-4 mt-10"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input
              placeholder="Emma watson"
              value={currentFormData.name}
              onChange={(e) => {
                handleFormData("name", e.target.value);
              }}
            />
            <FieldError />
          </TextField>
          <TextField isRequired={false} name="imageUrl" type="text">
            <Label>Image Url</Label>
            <Input
              placeholder="https://imageforest.com/userimage.png"
              value={currentFormData.image}
              onChange={(e) => {
                handleFormData("image", e.target.value);
              }}
            />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
       
      </div>
    </section>
  );
};

export default UpdateUser;
