//our-domain.com/new-meetup

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetUpPage() {
  function addMeetUpHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}
