import * as React from "react";
import Story from "./Story";

export default function Newsfeed() {
  const story = {
    title: "Why did the chicken cross the road? To get to the other side!",
    summary:
      "But let's be real, we all know the real reason the chicken crossed the road: to take a break from its busy day and enjoy the scenery on the other side. Sorry, other animals, but the chicken's gotta do what the chicken's gotta do..\n\nOk, ok, let's get even more real. The chicken didn't actually cross the road. It was just a clever disguise to avoid being cooked for dinner. Smart chicken, indeed.\n\nBut really, at the end of the day, does it even matter why the chicken crossed the road? All that matters is that it made for a hilarious dad joke that we can all enjoy. So here's to you, chicken. Keep on doing your thing.",
    poster: {
      name: "Chris P. Bacon",
      profilePicture: {
        url: "/assets/chris.p.bacon.png",
      },
    },
    thumbnail: {
      url: "/assets/chicken.png",
    },
  };

  return (
    <div className="newsfeed">
      <Story story={story} />
    </div>
  );
}
