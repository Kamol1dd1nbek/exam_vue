import * as Yup from "yup";
export const add_product_schema = Yup.object({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand is required"),
    group: Yup.string().required("Group is required"),
    price: Yup.number().required("Price is required"),
    arrival_price: Yup.number().required("Arrival price is required"),
    selling_price: Yup.number().required("Selling price is required"),
    description: Yup.string().required("Description is required")
});