import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
    _id:uuid(),
    content:
      "The 2024 Mustang® lineup has the power, tech and style to keep ahead of the pack — just like you.",
    likes: {
      likeCount: 3,
      likedBy: [
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
          createdAt: formatDate(2021, 6, 18, 26, 30),
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
          createdAt: formatDate(2022, 9, 12, 26, 30),
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
          createdAt: formatDate(2021, 8, 22, 26, 30),
          updatedAt: formatDate()
        }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "sameerbiswas@gmail.com",
      text: "Great post"
    }],
    username: "nayanendunaskar@gmail.com",
    profilePic:"https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1688316941~exp=1688317541~hmac=f674703d093ef62f269bbfd42c6d6654517c5f0a4882854062229a58fa087a03",
    userHandler:"nayan19981",
    file:"https://e0.pxfuel.com/wallpapers/155/992/desktop-wallpaper-dodge-challenger-mustang-car-background-car-iphone-dodge-burnout.jpg",
    createdAt:new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "The Crazy Tesla Cybertruck Pre-orders Cross 2 Lakh Mark Within A Week!",
    likes: {
      likeCount: 4,
      likedBy: [
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
          createdAt: formatDate(2001, 5, 15, 26, 30),
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
          createdAt: formatDate(2021, 5, 12, 26, 30),
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
          createdAt: formatDate(2021, 5, 12, 26, 30),
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
          createdAt: formatDate(2021, 5, 25, 26, 30),
          updatedAt: formatDate()
        }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "avijitghosh@gmail.com",
      text: "Great post!"
    },{
      _id: uuid(),
      username: "subhashsen1@gmail.com",
      text: "Wow!"
    }
    
  
  ],
    username: "nayanendunaskar@gmail.com",
    profilePic:"https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1688316941~exp=1688317541~hmac=f674703d093ef62f269bbfd42c6d6654517c5f0a4882854062229a58fa087a03",
    userHandler:"nayan19981",
    file:"https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20191127_133224/24664/oem-name0.jpg",
    createdAt:new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  }
  ,{
    _id:uuid(),
    content:
      "Audi India’s New Initiative Is Sure To Delight All e-tron EV Owners ",
    likes: {
      likeCount: 2,
      likedBy: [
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
          createdAt: formatDate(2020, 5, 19, 26, 30),
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
          createdAt: formatDate(2021, 5, 5, 26, 30),
          updatedAt: formatDate()
        },
     ],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "sameerbiswas@gmail.com",
      text: "Awesome car!"
    }],
    username: "nayanendunaskar@gmail.com",
    profilePic:"https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1688316941~exp=1688317541~hmac=f674703d093ef62f269bbfd42c6d6654517c5f0a4882854062229a58fa087a03",
    userHandler:"nayan19981",
    file:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-e-tron-GT/8607/1632310533051/front-left-side-47.jpg?tr=w-456",
    createdAt:new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Lexus To Strengthen Its India Presence By Opening Up Customer Touchpoints",
    likes: {
      likeCount: 1,
      likedBy: [
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
        }],
      dislikedBy: [],
    },
    file:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Lexus/LC-500h/7043/1676886702173/front-left-side-47.jpg?tr=w-456",
    comments:[  {
      _id: uuid(),
      username: "sonali@gmail.com",
      text: "Great info!"
    }],
    username: "marie@gmail.com",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=740&t=st=1688316978~exp=1688317578~hmac=fd42087bbe565c2ea9bc43ab0698a4e0be917c22f70f7e022bf57ed0117ab1f9",
    userHandler:"marie_xoxo",
    createdAt: new Date(2021, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Rolls-Royce Dawn To Be Launched On June 24",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Rolls-Royce/Rolls-Royce-Dawn/4289/1556525892112/front-left-side-47.jpg?tr=w-456",
    comments:[  {
      _id: uuid(),
      username: "alexa@gmail.com",
      text: "Love the car!"
    }],
    username: "chasmisguru@gmail.com",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688316913~exp=1688317513~hmac=94ea24c4cbee0b2bdc8ee4bbc67978c84c8e67305a1aed9b22a7c1c863e32cd0",
    userHandler:"chasmis_guru",
    createdAt:formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "It is a head runner and the way it pulls is just amazing ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg?tr=w-456",
    comments:[  {
      _id: uuid(),
      username: "bamakhyapa@gmail.com",
      text: "Nice car!"
    }],
    username: "sameerbiswas@gmail.com",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=740&t=st=1688317021~exp=1688317621~hmac=a62856b75da1a570da15ac2cd87048a1122fe84a6ce3c5cd392d12e62be08eef",
    userHandler:"sameer_biswas",
    createdAt: formatDate(2020, 5, 18, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Indian Scout Rogue ",
    likes: {
      likeCount: 1,
      likedBy: [  {
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
        createdAt: formatDate(2021, 5, 18, 26, 30),
        updatedAt: formatDate()
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "bamakhyapa@gmail.com",
      text: "Great post!"
    }],
    username: "subhashsen1@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/indian/scoute-rogue/494X300/scoute-rogue62eb4a450be38.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=740&t=st=1688317032~exp=1688317632~hmac=399fd7afbc4d4c08e0eee0c8e027916d1e6b1074705896a3f7980b8654145691",
    userHandler:"subhash_sen",
    createdAt: formatDate(2020, 5, 12, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Amazing Touring Bike ",
    likes: {
      likeCount: 1,
      likedBy: [{
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
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "subhashsen1@gmail.com",
      text: "Great post!"
    }],
    username: "sameerbiswas@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/triumph/tiger-850/494X300/tiger-8505fb4a02076da3.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=740&t=st=1688317021~exp=1688317621~hmac=a62856b75da1a570da15ac2cd87048a1122fe84a6ce3c5cd392d12e62be08eef",
    userHandler:"sameer_biswas",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },{
    _id:uuid(),
    content:
      "BMW R 1250 GS Adventure ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "bamakhyapa@gmail.com",
      text: "Great post!"
    }],
    username: "chasmisguru@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/bmw/r-1250-gs-adventure/494X300/r-1250-gs-adventure60e6da5f70d58.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688316913~exp=1688317513~hmac=94ea24c4cbee0b2bdc8ee4bbc67978c84c8e67305a1aed9b22a7c1c863e32cd0",
    userHandler:"chasmis_guru",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "BMW M 1000 RR ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "bamakhyapa@gmail.com",
      text: "Great bike!"
    }],
    username: "chasmisguru@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/bmw/m-1000-rr/494X300/m-1000-rr649c21b28c2c8.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688316913~exp=1688317513~hmac=94ea24c4cbee0b2bdc8ee4bbc67978c84c8e67305a1aed9b22a7c1c863e32cd0",
    userHandler:"chasmis_guru",
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:
      "Aprilia RSV4 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "buddhi@gmail.com",
      text: "Great post!"
    }],
    username: "buddhabadmas@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/aprilia/rsv4/494X300/rsv46156dd6c6a9c8.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1688316928~exp=1688317528~hmac=02da34a33bb81da6d8ccfbf2c51a87c38a153cda4161cabf369678b6c1bd6366",
    userHandler:"buddha_badmas",
    createdAt:formatDate(2020, 7, 16, 26, 30),
    updatedAt: formatDate(),
  },{
    _id:uuid(),
    content:
      "Kawasaki KLX 450R ",
    likes: {
      likeCount: 2,
      likedBy: [{
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
        createdAt: formatDate(2021, 5, 15, 26, 30),
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
      }],
      dislikedBy: [],
    },
    comments:[  {
      _id: uuid(),
      username: "chasmisguru@gmail.com",
      text: "Great post!"
    }],
    username: "sonali@gmail.com",
    file:"https://bd.gaadicdn.com/processedimages/kawasaki/klx-450r/494X300/m_klx-450r_11540288873.jpg?imwidth=400&impolicy=resize",
    profilePic:"https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1688316902~exp=1688317502~hmac=8cca0d3eef3709eb0d7e0ea2eb0b723ce2552b5c03d1ea92814ece65047149a4",
    userHandler:"so_sona",
    createdAt: formatDate(2022, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  

];