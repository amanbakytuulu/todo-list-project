// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorMessage = (error: any) => {
  const errorMessage =
    error instanceof Error ? error.message : "Что-то пошло не так!";

  return errorMessage;
};
