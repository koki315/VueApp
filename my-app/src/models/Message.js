// import  db from '../db/index';
import { datas } from "../db/index";
import firebase from "firebase";

const message = class Message {
  constructor(body, date, id) {
    (this.body = body), (this.date = date), (this.id = id);
  }

  static async save(message) {
    console.log("save");
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const docRef = await datas.add({
      body: message.body,
      date: timestamp,
    });
    const id = docRef.id;
    const data = await docRef.get();
    const snap = await data.data();
    return this.create(snap, id);
  }

  static async create(data, id) {
    const time = data.date.toDate().toLocaleString();
    const post = new message(data.body, time, id);
    return post;
  }
  static async fetchMessage() {
    console.log("fetch");
    const docs = await datas.orderBy('date').get();
    let array = [];
    docs.forEach((snap) => {
      const id = snap.id
      const message = snap.data();
      array.push({
        body:message.body,
        date:message.date.toDate().toLocaleString(),
        id:id
      });
    });
    console.log(array);
    return array;
  }
};

export default message;
