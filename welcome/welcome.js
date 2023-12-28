const reviews = [
    {
        id: 1,
        title: "Manjiro Sano",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOupvwM_kZpMaahafY2IRUfEy9KAGICYVoplBYxoQ23a92zrHnQBySPpouGO1FQShLakg&usqp=CAU",
        cast: "😎Gangstar",
        desc: "Mikey, the charismatic leader of the Tokyo Manji Gang in the anime series Tokyo Revengers, is a thrilling character who commands respect and strikes fear into his enemies. With his unwavering determination and incredible fighting skills, Mikey embarks on a journey to reshape the future and protect his friends, facing intense battles and life-or-death situations along the way. His unpredictable nature and loyalty make him a captivating and thrilling protagonist in this gripping anime series."
    },
    {
        id: 2,
        title: "Daiki Aomine",
        img: "https://c4.wallpaperflare.com/wallpaper/667/53/292/anime-kuroko-s-basketball-daiki-aomine-wallpaper-preview.jpg",
        cast: "😎Basketball Ace",
        desc: "Daiki Aomine, known as the Ace of the Generation of Miracles, is a thrilling character in the anime series Kuroko no Basket. With his exceptional skills, speed, and agility on the basketball court, Aomine is a formidable opponent who dominates the game. His relentless drive for victory and his unmatched talent make him a captivating and electrifying presence. As the series progresses, Aomine's complex personality and internal conflicts add depth and intrigue to his character, further enhancing the thrilling experience of the anime."
    },
    {
        id: 3,
        title: "Kakashi Hatake",
        img: "https://e0.pxfuel.com/wallpapers/950/281/desktop-wallpaper-kakashi-sharingan-iphone-fo-hatake-kakashi-thumbnail.jpg",
        cast: "😎Elite Ninja, Former Hokage",
        desc: "Kakashi Hatake, also known as Kakashi of the Sharingan, is a thrilling character in the anime series Naruto. As an elite ninja and former Hokage, Kakashi possesses immense skill, knowledge, and experience. His mysterious demeanor, masked face, and mastery of the Sharingan eye make him a formidable and intriguing figure. Throughout the series, Kakashi engages in intense battles, confronts personal challenges, and displays his exceptional tactical abilities. His enigmatic personality and dedication to his comrades make him an unforgettable and thrilling character in the Naruto universe."
    },
    {
        id: 4,
        title: "Ayanokoji",
        img: "https://images5.alphacoders.com/106/1065278.jpg",
        cast: "😎Mysterious Student",
        desc: `Ayanokoji is a thrilling character in the anime series "Classroom of the Elite." With his calm and composed demeanor, Ayanokoji hides his true abilities and intentions, making him an enigmatic figure among his classmates. He possesses exceptional intelligence, strategic thinking, and remarkable physical capabilities, allowing him to navigate through complex situations and outwit his opponents. As the series progresses, Ayanokoji's past and motivations gradually unfold, adding depth to his character and intensifying the intrigue surrounding him. His calculating nature and unpredictable actions make him a captivating and thrilling protagonist in "Classroom of the Elite."`
    },
    {
        id: 5,
        title: "Itachi Uchiha",
        img: "https://w0.peakpx.com/wallpaper/365/1004/HD-wallpaper-itachi-uchiha-electric-blue-magenta.jpg",
        cast: "😎Prodigy Shinobi, Former Member of Akatsuki",
        desc: "Itachi Uchiha, one of the most iconic characters in the anime series Naruto, is a complex and intriguing figure. With his incredible mastery of ninjutsu and the Sharingan eye, Itachi possesses formidable power. His enigmatic past, loyalty to his brother Sasuke, and involvement with the Akatsuki bring depth and suspense to his character. Itachi's calm demeanor, strategic brilliance, and tragic story make him a thrilling and beloved character in the Naruto universe."
    },
    {
        id: 6,
        title: "Isagi",
        img: "https://steamuserimages-a.akamaihd.net/ugc/2006950179756374875/BF3EB6867AB64981CE8F5C8E8143EB39CEC19D7C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        cast: "😎Talented Soccer Player",
        desc: "Isagi is the main protagonist in the anime series Blue Lock. As a talented soccer player, Isagi possesses exceptional speed, agility, and tactical awareness on the field. He is selected to participate in the challenging Blue Lock program, where elite strikers compete to become the best. Isagi's determination, growth, and rivalry with other players create a thrilling and intense narrative, showcasing his quest to become the ultimate striker and achieve greatness."
    },
]

function createCard(review) {
    const cardContainer = document.querySelector('.card-container');
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = review.img;
    img.alt = review.title;

    const info = document.createElement('div');
    info.className = 'info';

    const h2 = document.createElement('h2');
    h2.textContent = review.title;

    const p = document.createElement('p');
    p.textContent = review.desc;

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';

    const myListButton = document.createElement('button');
    myListButton.textContent = 'My List';

    info.appendChild(h2);
    info.appendChild(p);
    info.appendChild(playButton);
    info.appendChild(myListButton);

    card.appendChild(img);
    card.appendChild(info);

    cardContainer.appendChild(card);
}

// Loop through reviews and create cards
reviews.forEach(review => createCard(review));