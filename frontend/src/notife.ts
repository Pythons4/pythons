import { store } from 'react-notifications-component';
//Notification add
export const addnot = (text: any, thetype: any) => {
    store.addNotification({
        title: "",
        message: text,
        type: thetype,
        insert: "top",
        container: "top-right",
    });
}