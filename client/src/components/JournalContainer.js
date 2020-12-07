// this could be our journal container that we render on app.js
// this component will use the context to determine the user's ID
// then it will query the database for all journal entries by this user
// then we use that array of entries to map over and render out a card for each entry
import React, { useContext } from "react";
// import UserContext from "../utils/userContext"
import Card from "react-bootstrap/Card"
import { journalData } from "../scripts/journalData.js"
import Journal from './Journal/Journal'

function JournalContainer(){
  // const {entries} = useContext(UserContext)
  let entries = journalData;

  return (
    <div>
      {
      entries.map((entry) => (
        <Journal key={entry.userId} {...entry} />
      ))
      }
    </div>
  );
}

<<<<<<< HEAD
export function Journal(props) {
  const Style = {
    font: {
      fontFamily: "EB Garamond, serif",
    },
  };
  return (
    <Card className="journalCard">
      {/* this is where we will recieve the data for the cards */}
      <Card.Title style={Style.font}>{props.title}</Card.Title>
      <Card.Title style={Style.font}>{props.date}</Card.Title>
      <Card.Text>{props.content}</Card.Text>
    </Card>
  );
}
=======
// export function Journal(props) {
//   return (
//     <Card className="journalCard">
//       {/* this is where we will recieve the data for the cards */}
//       <Card.Title>{props.title}</Card.Title>
//       <Card.Title>{props.date}</Card.Title>
//       <Card.Text>{props.content}</Card.Text>
//     </Card>
//   );
// }
>>>>>>> ed0aeeda1714408053d9dccede6b4fc994958123

// Dream Journal component im accepting both for now, im notreally using the top part so it can all be changed if we need to
export default JournalContainer;

// export const Journal = () => {
//     return (
//         <>
//             <div className="entry-container">
//                 {journalData.map((data, key) => {
//                     return (
//                         <div key={key}>
//                             <Journal
//                                 key={key}
//                                 title={data.title}
//                                 userId={data.userId}
//                                 content={data.content}
//                                 date={data.date}
//                             />
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     );
// };
