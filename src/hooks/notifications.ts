import { useCallback, useState } from "react";
import { default as axios } from "axios";
import { useToast } from "@chakra-ui/react";

import { addBearer } from "utils";
import { useIdToken } from "./auth";
import { baseUrl } from "../constants";

export const useCreateRClientNotification = () => {
  const { getIdToken } = useIdToken();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const createNotification = useCallback(
    async ({ title, text }: { title: string; text: string }) => {
      setIsLoading(true);
      const token = await getIdToken();
      try {
        await axios.post(
          `${baseUrl}/recommendationClientNotifications`,
          {
            title,
            text,
          },
          addBearer(token)
        );

        toast({
          title: "作成しました",
          status: "success",
        });
        return true;
      } catch (e) {
        console.log(e);
        toast({
          title: "失敗しました",
          status: "error",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [getIdToken, toast]
  );

  return {
    isLoading,
    createNotification,
  };
};
