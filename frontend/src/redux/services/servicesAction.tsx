import { ServicesTypes } from "./servicesTypes";

export const setService = (service: any) => ({
    type: ServicesTypes.SET_SERVICES,
    payload: service
});