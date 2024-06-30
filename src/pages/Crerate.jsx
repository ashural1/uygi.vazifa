import InputForm from "../components/InputForm";
import { Form, useActionData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect } from "react";
import { GlobalLoading, showLoading } from "react-global-loading";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("name");
  let description = formData.get("description");
  let Ingredients = formData.get("Ingredients");
  let image = formData.get("image");
  let time = formData.get("time");
  let method = formData.get("method");
  let newDish = { name, description, Ingredients, image, time, method };
  await addDoc(collection(db, "dishes"), newDish);

  return newDish;
};

function Crerate() {
  let navigate = useNavigate();
  let actionData = useActionData();
  const show = () => {
    showLoading(true);
  };
  useEffect(() => {
    if (actionData) {
      navigate("/");
      showLoading(false);
    } else {
    }
  }, [actionData]);
  return (
    <div className=" aligen-content flex flex-col w-full items-center  ">
      
    </div>
  );
}

export default Crerate;
