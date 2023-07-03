import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "nayanendu",
    lastName: "naskar",
    username: "nayanendunaskar@gmail.com",
    password: "123",
    userHandler: "nayan19981",
    profilePic:"https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1688316941~exp=1688317541~hmac=f674703d093ef62f269bbfd42c6d6654517c5f0a4882854062229a58fa087a03",
    link:"https://nayanendu-personalized.netlify.app/",
    bio:"React Developer",
    bookmarks: [],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    firstName: "avijit",
    lastName: "ghosh",
    username: "avijitghosh@gmail.com",
    password: "avijit@123",
    userHandler: "avijit_ghosh",
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436199.jpg?w=740&t=st=1688317044~exp=1688317644~hmac=b6ea0b300b7c1fec1e5a79141721dbea449ddba636d48a3055bb3261db34b59a",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "subhash",
    lastName: "sen",
    username: "subhashsen1@gmail.com",
    password: "subhash@123",
    userHandler: "subhash_sen",
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=740&t=st=1688317032~exp=1688317632~hmac=399fd7afbc4d4c08e0eee0c8e027916d1e6b1074705896a3f7980b8654145691",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "sameer",
    lastName: "biswas",
    username: "sameerbiswas@gmail.com",
    password: "sameer@123",
    userHandler: "sameer_biswas",
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=740&t=st=1688317021~exp=1688317621~hmac=a62856b75da1a570da15ac2cd87048a1122fe84a6ce3c5cd392d12e62be08eef",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "bama",
    lastName: "khyapa",
    username: "bamakhyapa@gmail.com",
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?w=740&t=st=1688316989~exp=1688317589~hmac=3b369f32621b210928f504ee727d60c0a21efa947352fdf68b15b6fca55ce6b8",
    password: "bama@123",
    userHandler: "bama_khyapa",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "chasmis",
    lastName: "guru",
    username: "chasmisguru@gmail.com",
    password: "chasmis@123",
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688316913~exp=1688317513~hmac=94ea24c4cbee0b2bdc8ee4bbc67978c84c8e67305a1aed9b22a7c1c863e32cd0",
    userHandler: "chasmis_guru",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: "budhha",
    lastName: "badmas",
    username: "buddhabadmas@gmail.com",
    password: "buddha@123",
    userHandler: "buddha_badmas",
    bookmarks: [],
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1688316928~exp=1688317528~hmac=02da34a33bb81da6d8ccfbf2c51a87c38a153cda4161cabf369678b6c1bd6366",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: 9,
    firstName: "buddhi",
    lastName: "aunty",
    username: "buddhi@gmail.com",
    password: "buddhi@123",
    userHandler: "buddhi",
    bookmarks: [],
    followers: [],
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1688316888~exp=1688317488~hmac=df3021231870bc416503cf6dccd573cbcaff8eeb1491de5898f58678ae75df45",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }, {
    _id: 9,
    firstName: "sonali",
    lastName: "malhar",
    username: "sonali@gmail.com",
    password: "sonali@123",
    userHandler: "so_sona",
    bookmarks: [],
    followers: [],
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1688316902~exp=1688317502~hmac=8cca0d3eef3709eb0d7e0ea2eb0b723ce2552b5c03d1ea92814ece65047149a4",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  } , {
    _id: 9,
    firstName: "marie",
    lastName: "lelo",
    username: "marie@gmail.com",
    password: "marie@123",
    userHandler: "marie_xoxo",
    bookmarks: [],
    followers: [],
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1688316978~exp=1688317578~hmac=fd42087bbe565c2ea9bc43ab0698a4e0be917c22f70f7e022bf57ed0117ab1f9",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  } , {
    _id: 9,
    firstName: "alexa",
    lastName: "chat",
    username: "alexa@gmail.com",
    password: "alexa@123",
    userHandler: "alexa_bot",
    bookmarks: [],
    followers: [],
    profilePic: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1688317001~exp=1688317601~hmac=c82544b97644d2c6246b9ffb7861ffbd885f9365bfd3230952a17395290b60c3",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
  
 
];