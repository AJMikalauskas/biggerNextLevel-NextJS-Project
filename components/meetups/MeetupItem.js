import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  // Function to navigate us away to single [meetupId] page through this component
    // Same rules of hooks apply to NextJS as React, can't be inside another function???
      // router.push() works the same as history.push
        // Allows dynamic ability by using props.id which is from the dummy data in the start page
          // index.js in the Pages folder -> this will send to localhost:3000/props.id which goes to
            // the [meetupId] page, currently no data, probably would have to get from backend
  
  const router = useRouter();

  function showDetailsHandler  ()
  {
    router.push("/" + props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
