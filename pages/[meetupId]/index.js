// This is the meetup detail page -> localhost:3000/anything
    // This is except for specified things such as the localhost:3000/new-meetup
        // see how this route is got to by MeetupItem.js
// Default Data for now, will be fetched from backend in the future
    // Store in MeetupDetail.js and add styles via MeetupDetail.module.css
        // Don't create JSX in this page, outsource to components
            // change everything to props to make it dynamic, dispkays what is sent in from here,
            // could be helpful for fetching data from backend too???

import  MeetupDetail  from '../../components/meetups/MeetupDetail'
import  { MongoClient, ObjectId } from 'mongodb';
import {Fragment} from 'react';
import Head from 'next/head';
function MeetupDetails(props) {

    return (
        // These dynamic props are from the getStaticProps function return from below
        <Fragment>
            {/* This head tag just holds metadata like in HTML, can see in dev tools and source of page, see index.js in pages folder */}
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description}/>
            </Head>
        <MeetupDetail   image={props.meetupData.image}
        title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
        </Fragment>
    );
}

// since it's mainly based on the concept of pre-render process, dynamic routes 
    // need to be regenerated on new dynamic routes that are created or written by the user
export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority");
    // get hold of database by:
    const db = client.db();

    // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB
    const meetupsCollection = db.collection('meetups');

    // Work on the .find() to get all _id field values from the MongoDB
        // 1st param is to filter out specific documents
        // 2nd param is to filter out fields in the documents
            // by typing in _id:1, returns only 1 field which is the _id field for all document since no filter on documents
            // Convert to Array, and now populate paths object below with these by .map().
    const meetups = await meetupsCollection.find({}, {_id:1}).toArray();


    return {
        // .map() to an object with a key of params set equal to 
            /// the value of an object which contains meetupId as a key and meetup._id.toString() as a value to it
                // make sure to add comma correctly after params value object
        // replicate the hardcoded values below.
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() },
    })) ,
        /*[
            These are from the id's in the dummy data in index.js in pages folder(Start Page)
            These params are any possible routes that could be dynamic
            This will be generated later in the backend
                Removed These Hardcoded values:
                { params: {meetupId: 'm1',},},
                {params: {meetupId: 'm2',},},
        ],*/
        // if fallback is set to false, any page that doesn't match the ids such as "/m3", would return 404
            // "/m1" or "/m2" would return respectable pages
        // if fallback is set to true and the user goes to "/m3", nextJs will try to generate a relative page for it
            // wouldn't return 404 on unknown route but rather nextJs generated page on the fly
                // Not helpful here because if the meetup doesn't exist nextJs generating the page would be buggy and unneccessary 
        fallback: false
    };
}

export async function getStaticProps(context)
{
    // fetch data for a single meetup
        // make props as a meetupData for props, which is an object
            // need to make dynamic for specific meetupPages, can't just put in data like dummy data
    // That's why context is used in the param of getStaticProps() 
        // it has a params key -> pulls dynamic name from [] which in this case is called 
            // by [meetupId]
    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority");
    // get hold of database by:
    const db = client.db();

    // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB
    const meetupsCollection = db.collection('meetups');

    // need to send up props that are dynamic and not hardcoded
        // send up by finding and displaying data from the specific id passed into here or the .findOne() method
            // finds the document with the _id which is in the url -> need to convert to ObjectId as it is seen in MongoDb to find correctly
                // import { MongoClient, ObjectId} from 'mongodb';
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    // close client/DB after done using.
    client.close();
    // need to convert weird ObjectId of the document to a string again by .toString(), can't just send in selectedMeetup
        // change in the above component function in the <MeetupDetail/> import
    return{
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image:selectedMeetup.image,
                title:selectedMeetup.title,
                address: selectedMeetup.address,
                description:selectedMeetup.description
            }
        }
    };
};

export default MeetupDetails;