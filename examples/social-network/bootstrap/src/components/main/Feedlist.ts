import technology from "./images/technology.jpg";
import portrait01 from "./images/portrait-01.jpg";
import portrait02 from "./images/portrait-02.jpg";

export type FeedEntry = {
  author: string;
  portrait: string;
  date: string;
  content: string;
  image?: string;
}

export const feedlist: FeedEntry[] = [{
  author: "Irene Wolfe",
  portrait: portrait01,
  date: "6 Days",
  content: "With Deep Magic Volume 2, you can master new mechanics like true name magic, create arcane adversaries, and expand your repertoire with hundreds of new spells for every casting class! And because all wizards grow finer with age, this campaign also includes a remastered version of the first Deep Magic volume.",
}, {
  author: "Tori Schwartz",
  portrait: portrait02,
  date: "Yesterday",
  content: "These are native browser features that were widely used in the past, but now, even though every browser has native UI elements for them, it seems that developers have started to adopt custom solutions.",
  image: technology
}];
