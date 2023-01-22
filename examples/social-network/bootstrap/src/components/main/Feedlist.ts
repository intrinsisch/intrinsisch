export type FeedEntry = {
  author: string;
  date: string;
  content: string;
  image?: string;
}

export const feedlist: FeedEntry[] = [{
  author: "Irene Wolfe",
  date: "6 Days",
  content: "With Deep Magic Volume 2, you can master new mechanics like true name magic, create arcane adversaries, and expand your repertoire with hundreds of new spells for every casting class! And because all wizards grow finer with age, this campaign also includes a remastered version of the first Deep Magic volume.",
}, {
  author: "Tori Schwartz",
  date: "Yesterday",
  content: "These are native browser features that were widely used in the past, but now, even though every browser has native UI elements for them, it seems that developers have started to adopt custom solutions.",
  image: "https://source.unsplash.com/300x300/?technology"
}];
