import buildClient from "../api/build-client";
import Image from "next/image";
import logo from "../assets/logo.png";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <div className="mx-auto my-2">
      <div
        className="alert alert-success mx-auto"
        role="alert"
        style={{ width: "45%" }}
      >
        <h4 className="alert-heading">You are now Signed In</h4>
        <p>
          You are Signed In now, continue exploring the application. We are
          continuosuly working to bring other services up and running, you can
          explore the vairous services once the development phase is completed.
        </p>
        <hr />
        <p className="mb-0">
          You are using <strong>Auth Service</strong> of the application.
        </p>
      </div>
    </div>
  ) : (
    <div className="mx-auto p-2" style={{ width: "400px" }}>
      <p className="mx-5">
        Please <strong>Login</strong> to Explore the application
      </p>
      <p className="mx-4">
        Don't have an acccount..? <strong>Register</strong> with us
      </p>
      {/* Add image here */}
      <Image
        src={logo}
        alt="Logo"
        className="rounded"
        // width={500} automatically provided
        //  height={350} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>
        This is a Microservices enabled Web Application
        <br />
      </p>
      <p> It contains 4 services majorly</p>
      <ul>
        <li>Authentication</li>
        <li>Listing</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE!");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;

// Changed this on signout
{
  /* <div className="alert alert-danger mx-auto my-2" role="alert" style={{width: "45%"}}>
      <h4 className="alert-heading">You are NOT signed in!</h4>
      <p>
        Plese Sign In using your credentials and continue exploring the
        application.
      </p>
      <hr />
      <p className="mb-0">
        You are using <strong>Auth Service</strong> of the application.
      </p>
    </div> */
}
