import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  const defaultColor = "#58ab3dff";
  const gradientColor = `linear-gradient(to bottom, ${defaultColor}, #91f96eff)`;
  return (
    <div
      style={{ background: gradientColor }}
      className="flex justify-center items-center flex-col gap-10 w-full h-screen"
    >
      <SignUp />
    </div>
  );
}

export default SignUpPage;
