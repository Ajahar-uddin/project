import Form from "./Form";

function signup() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-[28px] font-medium text-[#1D2226]  w-[188px]  mt-[20px] mb-[31px] leading-[34.5px] ">
        Create your PopX account
      </h1>
      <Form />
    </div>
  );
}

export default signup;
