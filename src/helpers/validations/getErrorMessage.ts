const getErrorMessage = (errors: any) => {
  const errorMessage: { message: any }[] = [];
  errors?.details?.forEach((detail: any) => {
    const message = {
      message: detail.message
    };
    errorMessage.push(message);
  });
  return errorMessage;
};

export default getErrorMessage;
