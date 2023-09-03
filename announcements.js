function generateAnnouncementCard(announcement)

function createAnnouncements(announcements, containerid){
    const container = document.querySelector(containerid);
    container.innerHTML = "";
    const cards = announcements.map(generateAnnouncementCard);
}

function init(announcements){
    createAnnouncements(announcements, "#announcementsWrapper");
}


fetch("./mock/data.json")
.then ((res) => res.json)
.then ((data) => console.log(data));


new Promise((resolve, reject) =>{
    setTimeout(() => resolve ("done!"), 1000);
})