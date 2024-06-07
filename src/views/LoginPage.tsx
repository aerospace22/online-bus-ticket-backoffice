import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { AuthLayout } from "@/components/layouts";

const LoginPage: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const handleLogin = handleSubmit((formData: any) => {
    console.log(formData);
  });

  return (
    <AuthLayout>
      <h1 className="text-3xl text-center text-black font-bold">CUL Transport Backoffice Dashboard</h1>
      <p className="text-md text-center text-gray-600 mt-6">Manage routes, bookings, tickets, payments, and accounts</p>

      <form className="flex flex-col gap-4 mt-10" onSubmit={handleLogin}>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-gray-500 pl-2">E-mail address</p>
          <input
            type="text"
            className="w-full text-sm rounded-md border border-gray-300 py-3"
            placeholder="yourname@domain.com"
            {...register("email")}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-sm text-gray-500 pl-2">Password</p>
          <input
            type="text"
            className="w-full text-sm rounded-md border border-gray-300 py-3"
            placeholder="**********"
            {...register("password")}
            required
          />
        </div>

        <a href="#" className="text-sm text-blue-400 underline">
          Reset Password
        </a>

        <Button type="submit" color="blue" className="py-1" disabled>
          Log in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
