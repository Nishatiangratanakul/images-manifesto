document.getElementById('food1').addEventListener('click', () => {
    const title = document.getElementById('title');
    const review = document.querySelector('.review');
  
    title.textContent = "Fried Rice";
    review.textContent = "I end class late on Mondays so I started the school week off simply with some kimchi fried rice. This is a dish I fall on often when I don’t know what to make or I’m short on time. I almost always have the ingredients for it in my fridge and it’s a great way to use leftover rice as fresh rice will give the dish a mushy texture.";
});

document.getElementById('food2').addEventListener('click', () => {
    const title = document.getElementById('title');
    const review = document.querySelector('.review');

    title.textContent = "Neoguri";
    review.textContent = "I spent most of my day in the studio doing homework, but my friend came over for dinner and we decided to try out the popular Jiapaguri recipe from the movie: Parasite. I haven’t watched the movie in years, but I remembered the instant noodle concoction that the it stuck out to me both for the greater symbolism it held in the film as well as its amazing visuals. It was a relatively easy recipe to make, but we spiced it up a bit by adding some chili garlic crisps and chili powder. It was the perfect end to a long day of working.";
});

document.getElementById('food3').addEventListener('click', () => {
    const title = document.getElementById('title');
    const review = document.querySelector('.review');

    title.textContent = "Rice Noodle";
    review.textContent = "I was on a night shoot with a friend and we checked out this new rice noodle restaurant in Chinatown that we saw online. It was a rather humid day and we were all sweaty from the shoot, but I’ve always been told that a hot bowl of noodles is best for hot days. (Apparently, Thai people think that it makes you sweat even more and thus cools you off. Don’t quote me on the logic of that statement.) Our expectations might have been a tad bit high because we ended up being slightly disappointed by the dishes. Everything tasted alright but it wasn’t anything to write home about either. The beef was a bit tough and the soup had a bit of an instant taste to it, but the portions were very generous and so were the prices.";
});
