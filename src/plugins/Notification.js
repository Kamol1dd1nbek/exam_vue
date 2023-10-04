import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const Notification = () => {
   createToast("Username or password error", {
      position: "top-right",
      type: "danger",
      transition: "zoom",
   });
};

export default Notification;
