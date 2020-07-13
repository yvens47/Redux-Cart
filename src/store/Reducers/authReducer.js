import { toast } from "react-toastify";
export default (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("welcome back");
      return state;
    case "SIGN_IN_ERR":
      return state;
    case "SIGN_OUT":
      toast("You signed out...");
      return state;
    case "SIGN_IN_GOOGLE":
      return state;
    case "SIGN_IN_GOOGLE_ERROR":
   
      toast.error("Could not sign you in with google...");
      return state;

      case "SIGN_UP":
      toast("You signed up ...");
      return state;
    case "SIGN_UP_ERROR":
      toast.error("Could not sign you up ...");
      return state;

    default:
      return state;
      break;
  }
  return "auth";
};
