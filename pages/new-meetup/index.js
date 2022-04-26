// localhost:3000/new-meetup -> This is the route for this page
// use NewMeetupForm import from components/meetups -> it expects props of a function to handle the data passed in
//import Layout from "../../components/layout/Layout";
import { Fragment } from "react";
import  Head  from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  // More will happen with this function including sending this data to the backend API
  // and redirecting to the home page or index.js in pages folder.
  // and for right now, need Link not manual type in URL
  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    // How do you call internal API in api folder? fetch link
    // Call by "/api/new-meetup" -> call as folder level, very easy
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      // use JSON.stringify to convert the object to JSON format -> make sure passed in object contains all needed fields including:
      // address, description, image, and title
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // get data from the response
    const data = await response.json();
    console.log(data);
    // got a minor error because I didn't set const client to MongoClient in api folder, new-meetup.js
    // success once the client is defined, redirect to start page which shows all the meetups -> use useRouter hook to do so
    router.push("/");
  }
  // Also wrap this in <Layout> tags
  // Not great to do if lots of pages, don't want to wrap all the pages with <Layout> tags
  // unnecessary and tedious -> use _app.js -> just wrap _app.js Component with <Layout> tags.
  // The page components are what is shown in the Component tags in _app.js, wrap in Layout to show header
  // or nav or footer on every page.
  return (
    // <Layout>
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        {/* This is the meta description, Google's is "Search the world's information, including webpages, images, videos and more. 
                Google has many special features to help you find exactly what you're looking ..." */}
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportuntities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
    /* </Layout> */
  );
}

export default NewMeetupPage;
