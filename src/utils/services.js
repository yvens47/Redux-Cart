import firebase from "./firebase";

export const getCollectionOfDocument = async (
  rootCollection,
  id,
  CollectionsforId
) => {
  const reviews = await firebase
    .firestore()
    .collection(rootCollection)
    .doc(id)
    .collection(CollectionsforId)
    .get(); // get all reviews  from reviews collection for one product

  const reviewsList = [];
  // might have to refactor this code below.
  // to many loops. might cause performance issue
  reviews.forEach(review => reviewsList.push(review.data()));
  //reviewsList.push(review.data())

  return reviewsList;
};

export const addCollectionDocumentToDocument = async (
  rootCollection,
  id,
  CollectionsforId,
  data
) => {
  console.log(data);
  // Add a new document with a generated id.
  const res = await firebase
    .firestore()
    .collection("products")
    .doc(id)
    .collection(CollectionsforId)
    .add(data);

  console.log("Added document with ID: ", res.id);
};

// const addData = data => {
//   // Add a new document with a generated id.
//   const res = await.collection("cities").add({
//     name: "Tokyo",
//     country: "Japan"
//   });
// };
