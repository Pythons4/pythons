import { store } from 'react-notifications-component';

export const addnot = (text: any) => {
    store.addNotification({
        title: "Wonderful!",
        message: text,
        type: "success",
        insert: "top",
        container: "top-right",
    });
}