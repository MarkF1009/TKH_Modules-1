let lyrics = [`I messed up tonight, I lost anothEr fight, I messed up but I'll just start again, I keep falling down I keep on hitting the ground, I always get up now to see what's next. Birds don't just fly, thEy fall down and get up.  Nobody learns without getting it wrong! I won't give up, no I won't give in, till I reach the end and then I'll start again. No I won't leave, I wanna try everything, I wanna try even though I could fail!`];
let words = lyrics.split(" ")
for (let i=0; i < lyrics.length; i++) {
  if (words[i] == "e" && words[i] == 'E') {
  let newLyrics = words[i].replace(/e/ig, "$");
	}
}
let newLyrics = newString.join(" ");

console.log(newLyrics);



