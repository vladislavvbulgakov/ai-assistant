import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAd } from "../api/updateAd";
import type { ItemUpdateInput } from "../model/types";

export const useUpdateAd = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: ItemUpdateInput }) =>
            updateAd(id, data),

        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ["ad", id] });
            queryClient.invalidateQueries({ queryKey: ["ads"] });
        },
    });
};
