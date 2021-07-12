import StoryCard from "./StoryCard";

function Stories() {
    const stories = [{},{},{},{},{}];
    return (
        <div>
            <div className="p-2">
                {
                    stories.map(story => <StoryCard />)
                }
            </div>
        </div>
    )
}

export default Stories
