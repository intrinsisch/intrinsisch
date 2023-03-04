import technology from "./images/technology.jpg";
import portrait01 from "./images/portrait-01.jpg";
import portrait02 from "./images/portrait-02.jpg";

export type Comment = {
  author: string;
  content: string;
  replies?: Comment[];
}

export type FeedEntry = {
  author: string;
  portrait: string;
  date: string;
  content: string;
  image?: string;
  comments?: Comment[];
}

export const feedlist: FeedEntry[] = [{
  author: "Irene Wolfe",
  portrait: portrait01,
  date: "6 Days",
  content: "With Deep Magic Volume 2, you can master new mechanics like true name magic, create arcane adversaries, and expand your repertoire with hundreds of new spells for every casting class! And because all wizards grow finer with age, this campaign also includes a remastered version of the first Deep Magic volume.",
  comments: [{
    author: "Flavio Durand",
    content: "As an artist, it crushes my soul when drawings this intricate and detailed are called sketches. They're lovely!"
  }]
}, {
  author: "Tori Schwartz",
  portrait: portrait02,
  date: "Yesterday",
  content: "These are native browser features that were widely used in the past, but now, even though every browser has native UI elements for them, it seems that developers have started to adopt custom solutions.",
  image: technology,
  comments: [{
    author: "Junior Hilton",
    content: "You're letting semantics rule your thinking. And no drawing is ever going to be 100% detailed anyway - especially one drawn from fantasy. No charge for the pun.",
    replies: [{
      author: "Kyle Repalda",
      content: "thank you, was just about to say",
    }, {
      author: "Kabby Dochev",
      content: "This would look great on a tea towel"
    }]
  },
  {
    author: "Kyle Repalda",
    content: "I love Gundabad",
  }]
}];
