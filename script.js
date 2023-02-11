// console.log("hello world");

const firstPart = ["Hello", 'Hi', 'What\'s up', 'Yo Homie', 'Shoot man', 'Sup', 'Howdy'];



const middlePart = ['you think I could borrow', 'you want to have a', 'you going to eat', 'you going to wrestle', 'you have how many', 'you love to fight', 'you collect skins of'];



const finalPart = ['dogs', 'hamburgers', 'balloons', 'racoons', 'squid', 'cats', 'pillows', 'video games', 'anime girls', 'rabbits'];

const rand = (num) => Math.floor(Math.random() * num);

const getMessage = () => console.log(`${firstPart[rand(firstPart.length)]}, ${middlePart[rand(middlePart.length)]} ${finalPart[rand(finalPart.length)]}?`);


getMessage()
