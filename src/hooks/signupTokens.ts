import { useCallback, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { default as axios } from "axios";

import { addBearer } from "utils";
import { useIdToken } from "./auth";
import { baseUrl } from "../constants";

export const useCreateSignupToken = () => {
  const { getIdToken } = useIdToken();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const createSignupToken = useCallback(async () => {
    setIsLoading(true);
    const token = await getIdToken();
    try {
      const response = await axios.post<string>(
        `${baseUrl}/client_signup_token`,
        {},
        addBearer(token)
      );

      toast({
        title: "発行しました",
        status: "success",
      });

      return response.data;
    } catch (e) {
      console.log(e);
      toast({
        title: "失敗しました",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }, [getIdToken, toast]);

  return {
    createSignupToken,
    isLoading,
  };
};
