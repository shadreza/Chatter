import StoryCard from "./StoryCard";

const stories = [
    {
        src:   "https://i.ibb.co/DL5KwRH/pexels-photo-1764693-jpeg-cs-srgb-dl-pexels-alhadith-quotes-1764693.jpg",
        title: "Shahih Al-Bukhari - 6053"
    },
    {
        src:   "https://i.ibb.co/zXVGFvh/14485071358-1eb9628d8e-z.jpg",
        title: "Surah Baqarah - verse 286 (partial)"
    },
    {
        src:   "https://i.ibb.co/3zzjYYQ/Is-There-Any-Qur-anic-Evidence-the-Hadith-is-a-Valid-Part-of-Islam.jpg",
        title: "Surah Al-Anfal - verse 20"
    },
    {
        src:   "https://i.ibb.co/my6D7PT/7fcukkwgqj151.jpg",
        title: "Shahih Al-Bukhari - 5984"
    },
    {
        src:   "https://i.ibb.co/8YmdTjR/a51f694094e69d50f17fe709e2b8e17e.jpg",
        title: "Surah Baqarah - verse 186 (partial)"
    }
];

function Stories() {
    return (
        <div>
            <div className="p-2 flex justify-center space-x-3 mx-auto">
                {
                    stories.map(story => <StoryCard src={story.src} title={story.title} />)
                }
            </div>
        </div>
    )
}

export default Stories
