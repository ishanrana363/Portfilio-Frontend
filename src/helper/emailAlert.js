import Swal from "sweetalert2";

export const emailAlert = () => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to send this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, send it!"
  });
};
