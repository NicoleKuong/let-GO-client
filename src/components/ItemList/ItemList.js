// import React, { Component } from "react";
// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
// import SearchBarLocation from "../SearchByLocation/SearchBarLocation";

// export default class ItemList extends Component {
//   render() {
//     const { items } = this.props;
//     // console.log("itemsss", searchedItems);
//     // const hasSearchedItems = searchedItems && searchedItems.length > 0;

//     return (
//       <div>
//         <SearchBarLocation />
//         {!items && "Loading..."}
//         {items && (
//           <div>
//             {items.map((item, index) => (
//               <Card
//                 className="item-card"
//                 style={{ width: "18rem" }}
//                 key={index}
//               >
//                 <Card.Img variant="top" src={item.images[0].imageUrl} />
//                 <Card.Body>
//                   <Card.Title>{item.title}</Card.Title>
//                   <Card.Text>Description: {item.description}</Card.Text>
//                   <Card.Text>Price: {item.price}</Card.Text>
//                   <Card.Text>
//                     <FontAwesomeIcon icon={faMapMarkedAlt} /> {item.user.city},
//                     Netherlands
//                   </Card.Text>
//                   <Link to={`items/${item.id}`}>
//                     <Button variant="secondary">View Details</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import SearchBarLocation from "../SearchByLocation/SearchBarLocation";

export default class ItemList extends Component {
  render() {
    const { items, searchedItems } = this.props;
    // console.log("itemsss", searchedItems);
    const hasSearchedItems = searchedItems && searchedItems.length > 0;
    // console.log("hasSearchedItems", hasSearchedItems);

    return (
      <div>
        <SearchBarLocation />
        {!items && "Loading..."}
        {hasSearchedItems ? (
          <div>
            {searchedItems.map((item, index) => (
              <Card
                className="item-card"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Img variant="top" src={item.images[0].imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faMapMarkedAlt} /> {item.user.city},
                    Netherlands
                  </Card.Text>
                  <Link to={`items/${item.id}`}>
                    <Button variant="secondary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            {items.map((item, index) => (
              <Card
                className="item-card"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Img variant="top" src={item.images[0].imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faMapMarkedAlt} /> {item.user.city},
                    Netherlands
                  </Card.Text>
                  <Link to={`items/${item.id}`}>
                    <Button variant="secondary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
