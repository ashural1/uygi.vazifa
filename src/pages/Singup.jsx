import { Form, Link } from "react-router-dom";
import InputForm from "../components/InputForm";
// import { AiOutlineGooglePlus } from "react-icons/ai";
// import { AiOutlineLogin } from "react-icons/ai";
import { useActionData } from "react-router-dom";
import useSingup from "../hooks/useSingup";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("dispalyName");
  let email = formData.get("email");
  let url = formData.get("url");
  let password = formData.get("password");

  return { url, password, email, name };
};
function Singup() {
  let { handleGoogle, handleSubmit } = useSingup();
  return (
   <div className="auth-continer">
    <div className="auth-left"></div>
    <div className="auth-right ">
      <div className="  p-10 pt-4 bg-base-300   w-96  items-center gap-5 ">
        <Form method="post">
        <h1 className="text-4xl font-bold">Singup</h1>
          <InputForm label="Dispaly Name" name="dispalyName" type="text" />
          <InputForm label="Email" name="email" type="email" />
          <InputForm label="PhotoUrl" name="url" type="url" />
          <InputForm label="password" name="password" type="password" />
          <button
            onClick={handleSubmit}
            className="btn btn-bg-accent-content w-full mb-3 mt-3"
            
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
  <path d="M 76.8 153.6 Q 76.8 125.6 90.4 102.4 L 90.4 102.4 L 90.4 102.4 Q 104 79.2 128 64.8 Q 152 51.2 179.2 51.2 Q 206.4 51.2 230.4 64.8 Q 254.4 79.2 268 102.4 Q 281.6 125.6 281.6 153.6 Q 281.6 181.6 268 204.8 Q 254.4 228 230.4 242.4 Q 206.4 256 179.2 256 Q 152 256 128 242.4 Q 104 228 90.4 204.8 Q 76.8 181.6 76.8 153.6 L 76.8 153.6 Z M 0 436.8 Q 1.6 376.8 41.6 336 L 41.6 336 L 41.6 336 Q 82.4 296 142.4 294.4 L 216 294.4 L 216 294.4 Q 276 296 316.8 336 Q 356.8 376.8 358.4 436.8 Q 358.4 447.2 351.2 453.6 Q 344.8 460.8 334.4 460.8 L 24 460.8 L 24 460.8 Q 13.6 460.8 7.2 453.6 Q 0 447.2 0 436.8 L 0 436.8 Z M 403.2 300.8 L 403.2 249.6 L 403.2 300.8 L 403.2 249.6 L 352 249.6 L 352 249.6 Q 334.4 248 332.8 230.4 Q 334.4 212.8 352 211.2 L 403.2 211.2 L 403.2 211.2 L 403.2 160 L 403.2 160 Q 404.8 142.4 422.4 140.8 Q 440 142.4 441.6 160 L 441.6 211.2 L 441.6 211.2 L 492.8 211.2 L 492.8 211.2 Q 510.4 212.8 512 230.4 Q 510.4 248 492.8 249.6 L 441.6 249.6 L 441.6 249.6 L 441.6 300.8 L 441.6 300.8 Q 440 318.4 422.4 320 Q 404.8 318.4 403.2 300.8 L 403.2 300.8 Z" />
</svg>
            Submit
          </button>
        </Form>
        <button
          onClick={handleGoogle}
          type="button"
          className="btn btn-bg-accent-content w-full mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M 507.8709677419355 262.19354838709677 Q 505.80645161290323 373.6774193548387 439.741935483871 441.80645161290323 L 439.741935483871 441.80645161290323 L 439.741935483871 441.80645161290323 Q 372.64516129032256 509.93548387096774 260.1290322580645 512 Q 188.90322580645162 510.96774193548384 131.09677419354838 476.9032258064516 Q 73.29032258064517 442.83870967741933 39.225806451612904 385.03225806451616 Q 5.161290322580645 327.2258064516129 4.129032258064516 256 Q 5.161290322580645 184.7741935483871 39.225806451612904 126.96774193548387 Q 73.29032258064517 69.16129032258064 131.09677419354838 35.096774193548384 Q 188.90322580645162 1.032258064516129 260.1290322580645 0 Q 364.38709677419354 2.064516129032258 431.48387096774195 67.09677419354838 L 362.3225806451613 134.19354838709677 L 362.3225806451613 134.19354838709677 Q 313.80645161290323 90.83870967741936 253.93548387096774 94.96774193548387 Q 194.06451612903226 98.06451612903226 148.6451612903226 140.38709677419354 Q 104.25806451612904 183.74193548387098 101.16129032258064 256 Q 103.2258064516129 325.16129032258067 147.61290322580646 370.5806451612903 Q 193.03225806451613 416 260.1290322580645 418.06451612903226 Q 310.7096774193548 417.03225806451616 341.6774193548387 397.4193548387097 Q 372.64516129032256 377.80645161290323 388.1290322580645 353.03225806451616 Q 402.5806451612903 327.2258064516129 405.6774193548387 307.61290322580646 L 260.1290322580645 307.61290322580646 L 260.1290322580645 307.61290322580646 L 260.1290322580645 218.83870967741936 L 260.1290322580645 218.83870967741936 L 503.741935483871 218.83870967741936 L 503.741935483871 218.83870967741936 Q 507.8709677419355 237.41935483870967 507.8709677419355 262.19354838709677 L 507.8709677419355 262.19354838709677 Z" />
          </svg>
          Singup
        </button>
        <Link to="/login" type="button" className="btn btn-bg-accent-content w-full">
          Login
        </Link>
      </div>
    </div>
   </div>
  );
}

export default Singup;
